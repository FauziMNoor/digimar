# ─── Stage 1: Build ───────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install ALL dependencies (including devDependencies for vite)
COPY package*.json ./
RUN npm ci --include=dev

# Copy source and build
COPY . .
RUN npm run build

# ─── Stage 2: Production ──────────────────────────────────────────
FROM node:20-alpine AS production

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Copy server and runtime files
COPY server.js ./
COPY data ./data
COPY public ./public

# Expose port
EXPOSE 3000

# Environment defaults (override in Coolify)
ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "server.js"]
