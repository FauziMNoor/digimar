import './style.css';
const logoUrl = '/logo/Digimar - Wide no Background.png';
const logoIcon = '/logo/logo.png';

// ===========================
// Chevron SVG helper
// ===========================
const chevronDown = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>`;

// ===========================
// Logo marquee brands
// ===========================
const brands = ['Meta Ads', 'Google Ads', 'TikTok', 'SEO', 'Web Dev', 'Content'];

function createMarqueeItems() {
  return brands
    .map(
      (name) => `
    <div class="marquee-item">
      <div class="marquee-icon liquid-glass">${name[0]}</div>
      <span class="marquee-name">${name}</span>
    </div>
  `
    )
    .join('');
}

// ===========================
// Services Data
// ===========================
const services = [
  { num: '01', name: 'Digital Advertising', desc: 'Running and refining campaigns across platforms like Meta, Instagram, TikTok, and Google. We focused on steady, measurable growth rather than guesswork.' },
  { num: '02', name: 'Creative & Content', desc: 'Shaping how your brand shows up — from business aesthetic, campaign ideas and content direction to copywriting, graphic design, and visual production (photo and video).' },
  { num: '03', name: 'Web Development & Maintenance', desc: 'Building and maintaining websites that are clear, functional, and aligned with how your business works.' },
  { num: '04', name: 'Search Engine Optimization', desc: 'Improving how your business is discovered. Making sure the right people can find you, organically.' },
  { num: '05', name: 'Marketing Guidance', desc: 'Working with you to define direction, your audience, your offers, and how you attract and convert interest into something more consistent.' },
  { num: '06', name: 'Community & Retention', desc: 'Helping you build closer relationships with your audience. Creating programs and ideas that keep people engaged and coming back.' },
];

function createServiceItems() {
  return services
    .map(
      (s, i) => `
    <div class="service-item" style="transition-delay: ${i * 100}ms">
      <span class="service-number">${s.num}</span>
      <div class="service-info">
        <h3 class="service-name">${s.name}</h3>
        <p class="service-desc">${s.desc}</p>
      </div>
    </div>
  `
    )
    .join('');
}

// ===========================
// Gallery Images (scroll-driven marquee)
// ===========================
const galleryRow1 = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const galleryRow2 = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

function createGalleryTiles(images) {
  // Triple for seamless scrolling
  const tripled = [...images, ...images, ...images];
  return tripled.map((src) => `<img class="gallery-tile" src="${src}" alt="" loading="lazy" />`).join('');
}

// ===========================
// Consulted Brand Logos
// ===========================
const brandLogos = [
  'armour', 'azarine', 'blibli', 'bocahindo', 'canon', 'elemis',
  'ellips', 'fujifilm', 'glints', 'grab', 'hokben', 'idemitsu',
  'itb', 'lotte', 'lps', 'mondemart', 'nars', 'nissin',
  'pegadaian', 'polytron', 'raksa', 'ricola', 'rohto', 'sekai',
  'senka', 'shopee', 'toyota', 'ugm', 'usm',
];

function createBrandLogoItems(logos) {
  const doubled = [...logos, ...logos];
  return doubled
    .map(
      (name) => `
    <div class="brand-logo-item">
      <img src="/logobrand_consult/${name}.png" alt="${name}" loading="lazy" />
    </div>
  `
    )
    .join('');
}

const brandRow1 = brandLogos.slice(0, 15);
const brandRow2 = brandLogos.slice(15);

// ===========================
// Selected Work Data
// ===========================
const selectedWork = [
  {
    num: '01',
    name: 'Cik Swi',
    location: 'Denpasar',
    context: 'A long-standing food business looking to take on a more modern presence while staying true to its roots.',
    workedOn: 'Refining brand storytelling and visual direction. We develop content that reflects its core identity, while expanding into digital through posts, website support, and its own online ordering platform.',
    direction: 'To make the brand more recognizable and memorable — something people not only notice, but associate with familiarity.',
  },
  {
    num: '02',
    name: 'Alexandra Beauty',
    location: 'Jimbaran',
    context: 'A newly growing beauty business, evolving from a makeup artist into a broader beauty and spa offering.',
    workedOn: 'Building the foundation from the ground up — from branding direction, content setup, early audience targeting, and initial advertising, along with the tools needed to support growth.',
    direction: 'To create a clear and structured starting point for long-term visibility and development.',
  },
];

function createSelectedWorkCards() {
  return selectedWork
    .map(
      (w, i) => `
    <div class="sw-card glass-container" style="transition-delay: ${i * 150}ms">
      <div class="sw-card-header">
        <span class="sw-number">${w.num}</span>
        <div class="sw-meta">
          <h3 class="sw-name">${w.name}</h3>
          <span class="sw-location">${w.location}</span>
        </div>
      </div>
      <div class="sw-details">
        <div class="sw-detail-item">
          <h4 class="sw-detail-label">Context</h4>
          <p class="sw-detail-text">${w.context}</p>
        </div>
        <div class="sw-detail-item">
          <h4 class="sw-detail-label">What we worked on</h4>
          <p class="sw-detail-text">${w.workedOn}</p>
        </div>
        <div class="sw-detail-item">
          <h4 class="sw-detail-label">Direction</h4>
          <p class="sw-detail-text">${w.direction}</p>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

// ===========================
// Render App
// ===========================
document.querySelector('#app').innerHTML = `
  <!-- Fixed Full-Screen Video Background -->
  <div class="fixed-bg" id="fixedBg">
    <video
      class="fixed-bg-video"
      id="heroVideo"
      muted
      playsinline
      preload="auto"
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
    ></video>
    <div class="fixed-bg-overlay"></div>
    <div class="floating-logos">
      <img src="${logoIcon}" class="float-logo fl-1" alt="" />
      <img src="${logoIcon}" class="float-logo fl-2" alt="" />
      <img src="${logoIcon}" class="float-logo fl-3" alt="" />
      <img src="${logoIcon}" class="float-logo fl-4" alt="" />
      <img src="${logoIcon}" class="float-logo fl-5" alt="" />
    </div>
  </div>

  <!-- Scrollable Content Layer -->
  <div class="scroll-content">

    <!-- Navbar -->
    <nav class="navbar" id="navbar">
      <a href="/" class="navbar-logo">
        <img src="${logoUrl}" alt="Digitalmarketings.id logo" />
      </a>
      <div class="navbar-center">
        <a href="#about" class="nav-item">About</a>
        <a href="#services" class="nav-item">Services</a>
        <a href="#gallery" class="nav-item">Portfolio</a>
        <a href="#selected-work" class="nav-item">Work</a>
        <a href="#contact" class="nav-item">Contact</a>
      </div>
      <a href="https://wa.me/6285926461587" target="_blank" class="btn-hero-secondary">Start Here</a>
    </nav>
    <div class="navbar-divider"></div>

    <!-- Hero Section -->
    <section class="hero-section" id="hero-section">
      <div class="hero-inner">
        <p class="hero-eyebrow">DigitalMarketings.id</p>
        <h1 class="hero-headline">
          <span class="hero-line">Some brands you <span class="gradient-text">pass by</span></span>
          <span class="hero-line">Some become the ones you <span class="gradient-text">recognize</span></span>
        </h1>
        <p class="hero-subtitle">
          We work closely with growing businesses, shaping ideas<br />into something people notice, and remember.
        </p>
        <a href="https://wa.me/6285926461587" target="_blank" class="btn-cta-gradient" id="btn-cta">Let's Build It Together</a>
      </div>
    </section>

    <!-- Logo Marquee -->
    <div class="marquee-section">
      <div class="marquee-container">
        <div class="marquee-label">Our expertise<br />across channels</div>
        <div class="marquee-track-wrapper">
          <div class="marquee-track">
            ${createMarqueeItems()}
            ${createMarqueeItems()}
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="about-inner">
        <div class="section-header">
          <p class="section-label" style="color: #f97316;">About Us</p>
          <h2 class="section-title">About</h2>
        </div>

        <div class="about-card glass-container">
          <div class="about-story-block">
            <div class="about-accent-bar"></div>
            <div class="about-story-center">
              <p class="about-lead"><strong>DigitalMarketings.id</strong> is a Bali-based digital partner for businesses that want to grow, evolve, or redefine how they show up.</p>
              <p class="about-body">We work closely with early-stage and growing businesses, helping them shape ideas in their early thoughts into something more structured, more intentional, and built to last.</p>
              <p class="about-body">Not everything starts clear. Sometimes it's just a thought, a direction, or something that hasn't fully come together yet. That's where we come in.</p>
              <p class="about-body">We help make sense of it — highlighting your path for success, turning ideas into direction, and showcase your work into something people remember.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work Section -->
    <section class="about-section" id="how-we-work">
      <div class="about-inner">
        <div class="section-header">
          <p class="section-label" style="color: #06b6d4;">Our Process</p>
          <h2 class="section-title">How We <span class="gradient-text">Work</span></h2>
        </div>

        <div class="about-card glass-container">
          <div class="about-story-block">
            <div class="about-accent-bar"></div>
            <div class="about-story-center">
              <p class="about-lead">We don't believe in jumping straight into execution.</p>
              <p class="about-body">Instead, we take time to understand what you're building, who it's for, and what actually makes sense for your stage. From there, we work alongside you — building, testing, and refining as things grow.</p>
              <p class="about-body">It's a close process, and intentionally so.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section — In The Works -->
    <section class="content-section" id="services">
      <div class="glass-container">
        <div class="section-header">
          <p class="section-label" style="color: #a855f7;">In The Works</p>
          <h2 class="section-title">Services</h2>
        </div>
        <div class="service-list">
          ${createServiceItems()}
        </div>
      </div>
    </section>

    <!-- Portfolio Gallery — Scroll-Driven Marquee -->
    <section class="gallery-section" id="gallery">
      <div class="section-header" style="padding: 0 32px; margin-bottom: 48px;">
        <p class="section-label" style="color: #06b6d4;">Our Work</p>
        <h2 class="section-title">Portfolio</h2>
      </div>
      <div class="gallery-row" id="galleryRow1">
        ${createGalleryTiles(galleryRow1)}
      </div>
      <div class="gallery-row" id="galleryRow2">
        ${createGalleryTiles(galleryRow2)}
      </div>
    </section>

    <!-- Selected Work Section -->
    <section class="selected-work-section" id="selected-work">
      <div class="section-header">
        <p class="section-label" style="color: #a855f7;">Case Studies</p>
        <h2 class="section-title">Selected <span class="gradient-text">Work</span></h2>
      </div>
      <div class="sw-grid">
        ${createSelectedWorkCards()}
      </div>
    </section>

    <!-- Trusted By Section -->
    <section class="trusted-section" id="trusted">
      <div class="section-header">
        <p class="section-label" style="color: #06b6d4;">Trust & Experience</p>
        <h2 class="section-title">Consulted & <span class="gradient-text">Worked With</span></h2>
      </div>
      <div class="brand-marquee-wrapper">
        <div class="brand-marquee-row brand-marquee-left">
          ${createBrandLogoItems(brandRow1)}
        </div>
        <div class="brand-marquee-row brand-marquee-right">
          ${createBrandLogoItems(brandRow2)}
        </div>
      </div>
    </section>

    <!-- Footer / Contact -->
    <footer class="footer-section" id="contact">
      <div class="footer-inner">
        <div class="section-header">
          <p class="section-label" style="color: #f97316;">Let's Talk</p>
          <h2 class="section-title">Contact</h2>
        </div>
        <div class="footer-content">
          <div class="footer-cta">
            <p class="footer-tagline">Got an idea or a look in mind?<br />Let's shape it.</p>
            <a href="https://wa.me/6285926461587" target="_blank" class="btn-cta-gradient">Start Here</a>
          </div>
          <div class="footer-info">
            <div class="footer-info-block">
              <h4 class="footer-info-label">Office</h4>
              <a href="https://maps.google.com/?q=Jl.+Drupadi+XI+No+B10,+Renon,+Denpasar,+Bali" target="_blank" class="footer-info-text footer-link footer-icon-link">
                <svg class="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Jl. Drupadi XI No B10, Renon,<br/>Denpasar, Bali
              </a>
            </div>
            <div class="footer-info-block">
              <h4 class="footer-info-label">Phone</h4>
              <a href="https://wa.me/6285926461587" target="_blank" class="footer-info-text footer-link footer-icon-link">
                <svg class="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +62 8592 6461 587
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copy">&copy; ${new Date().getFullYear()} Digimar. All rights reserved.</p>
        </div>
      </div>
    </footer>

  </div>
`;

// ===========================
// Video Fade Loop Controller
// ===========================
(function initVideoLoop() {
  const video = document.getElementById('heroVideo');
  if (!video) return;

  const FADE_DURATION = 0.5;
  let isFadingIn = false;
  let isFadingOut = false;
  let fadeStart = 0;

  function startFadeIn() {
    isFadingIn = true;
    fadeStart = 0;
    requestAnimationFrame(fadeInTick);
  }

  function fadeInTick(ts) {
    if (!fadeStart) fadeStart = ts;
    const elapsed = (ts - fadeStart) / 1000;
    const progress = Math.min(elapsed / FADE_DURATION, 1);
    video.style.opacity = progress;
    if (progress < 1) requestAnimationFrame(fadeInTick);
    else isFadingIn = false;
  }

  function fadeOutTick(ts) {
    if (!fadeStart) fadeStart = ts;
    const elapsed = (ts - fadeStart) / 1000;
    const progress = Math.min(elapsed / FADE_DURATION, 1);
    video.style.opacity = 1 - progress;
    if (progress < 1) requestAnimationFrame(fadeOutTick);
    else isFadingOut = false;
  }

  function checkForFadeOut() {
    if (!isFadingOut && !isFadingIn && video.duration && video.currentTime >= video.duration - FADE_DURATION) {
      isFadingOut = true;
      fadeStart = 0;
      requestAnimationFrame(fadeOutTick);
    }
  }

  video.addEventListener('ended', () => {
    video.style.opacity = 0;
    setTimeout(() => { video.currentTime = 0; video.play(); startFadeIn(); }, 100);
  });
  video.addEventListener('timeupdate', checkForFadeOut);
  video.play().then(() => startFadeIn()).catch(() => { video.muted = true; video.play().then(() => startFadeIn()); });
})();

// ===========================
// Parallax Zoom on Background
// ===========================
(function initParallaxZoom() {
  const bg = document.getElementById('fixedBg');
  if (!bg) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(scrollY / maxScroll, 1);
        const scale = 1 + progress * 0.35;
        bg.style.transform = `scale(${scale})`;
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ===========================
// Scroll Reveal for All Elements
// ===========================
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.glass-container, .service-item, .about-story-center, .about-vm-item, .sw-card, .footer-cta, .footer-info-block');
  if (!revealEls.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  revealEls.forEach((el) => observer.observe(el));
})();

// ===========================
// Gallery Scroll-Driven Movement
// ===========================
(function initGalleryScroll() {
  const section = document.getElementById('gallery');
  const row1 = document.getElementById('galleryRow1');
  const row2 = document.getElementById('galleryRow2');
  if (!section || !row1 || !row2) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const sectionTop = section.offsetTop;
        const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

        row1.style.transform = `translateX(${offset - 200}px)`;
        row2.style.transform = `translateX(${-(offset - 200)}px)`;

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Initial position
})();

