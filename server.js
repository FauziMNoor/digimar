import express from 'express';
import multer from 'multer';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { readFileSync, writeFileSync, existsSync, unlinkSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'digimar-admin-secret-2025';

// Default admin credentials (change via env vars in production)
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS_HASH = bcryptjs.hashSync(process.env.ADMIN_PASS || 'digimar2025', 10);

// Middleware
app.use(express.json());
app.use(cookieParser());

// --- Data helpers ---
const DATA_DIR = join(__dirname, 'data');
const BRANDS_FILE = join(DATA_DIR, 'brands.json');
const WORKS_FILE = join(DATA_DIR, 'works.json');
const UPLOAD_DIR = join(__dirname, 'public', 'logobrand_consult');

if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
if (!existsSync(UPLOAD_DIR)) mkdirSync(UPLOAD_DIR, { recursive: true });

function readJSON(file) {
  if (!existsSync(file)) return [];
  return JSON.parse(readFileSync(file, 'utf-8'));
}

function writeJSON(file, data) {
  writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
}

// --- Multer for logo uploads ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const safeName = file.originalname.toLowerCase().replace(/\s+/g, '_');
    cb(null, safeName);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files allowed'), false);
  },
  limits: { fileSize: 5 * 1024 * 1024 },
});

// --- Auth middleware ---
function authMiddleware(req, res, next) {
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// ===========================
// Auth Routes
// ===========================
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username !== ADMIN_USER || !bcryptjs.compareSync(password, ADMIN_PASS_HASH)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ user: ADMIN_USER }, JWT_SECRET, { expiresIn: '24h' });
  res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
  res.json({ success: true });
});

app.post('/api/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ success: true });
});

app.get('/api/me', authMiddleware, (req, res) => {
  res.json({ user: req.user.user });
});

// ===========================
// Brand Logos - Public
// ===========================
app.get('/api/brands', (req, res) => {
  res.json(readJSON(BRANDS_FILE));
});

// ===========================
// Brand Logos - Admin CRUD
// ===========================
app.post('/api/brands', authMiddleware, upload.single('logo'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Logo file required' });
  const brands = readJSON(BRANDS_FILE);
  const newId = brands.length ? Math.max(...brands.map((b) => b.id)) + 1 : 1;
  const nameNoExt = req.file.filename.replace(/\.[^.]+$/, '');
  const newBrand = { id: newId, name: req.body.name || nameNoExt, file: req.file.filename };
  brands.push(newBrand);
  writeJSON(BRANDS_FILE, brands);
  res.json(newBrand);
});

app.delete('/api/brands/:id', authMiddleware, (req, res) => {
  let brands = readJSON(BRANDS_FILE);
  const brand = brands.find((b) => b.id === Number(req.params.id));
  if (!brand) return res.status(404).json({ error: 'Not found' });
  // Delete the logo file
  const filePath = join(UPLOAD_DIR, brand.file);
  if (existsSync(filePath)) unlinkSync(filePath);
  brands = brands.filter((b) => b.id !== Number(req.params.id));
  writeJSON(BRANDS_FILE, brands);
  res.json({ success: true });
});

// ===========================
// Selected Works - Public
// ===========================
app.get('/api/works', (req, res) => {
  res.json(readJSON(WORKS_FILE));
});

// ===========================
// Selected Works - Admin CRUD
// ===========================
app.post('/api/works', authMiddleware, (req, res) => {
  const works = readJSON(WORKS_FILE);
  const newId = works.length ? Math.max(...works.map((w) => w.id)) + 1 : 1;
  const num = String(works.length + 1).padStart(2, '0');
  const newWork = {
    id: newId,
    num,
    name: req.body.name || '',
    location: req.body.location || '',
    context: req.body.context || '',
    workedOn: req.body.workedOn || '',
    direction: req.body.direction || '',
    link: req.body.link || '',
  };
  works.push(newWork);
  writeJSON(WORKS_FILE, works);
  res.json(newWork);
});

app.put('/api/works/:id', authMiddleware, (req, res) => {
  const works = readJSON(WORKS_FILE);
  const idx = works.findIndex((w) => w.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  works[idx] = { ...works[idx], ...req.body, id: works[idx].id };
  writeJSON(WORKS_FILE, works);
  res.json(works[idx]);
});

app.delete('/api/works/:id', authMiddleware, (req, res) => {
  let works = readJSON(WORKS_FILE);
  if (!works.find((w) => w.id === Number(req.params.id))) {
    return res.status(404).json({ error: 'Not found' });
  }
  works = works.filter((w) => w.id !== Number(req.params.id));
  // Re-number
  works.forEach((w, i) => { w.num = String(i + 1).padStart(2, '0'); });
  writeJSON(WORKS_FILE, works);
  res.json({ success: true });
});

// ===========================
// Serve static files (Vite build output)
// ===========================
app.use(express.static(join(__dirname, 'dist')));
app.use(express.static(join(__dirname, 'public')));

// Admin page
app.get('/admin', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'admin.html'));
});

// SPA fallback
app.get('/{*splat}', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Digimar server running on http://localhost:${PORT}`);
});
