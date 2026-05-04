import './style.css';
const logoUrl = '/logo/Digimar - Wide no Background.png';

// ===========================
// Chevron SVG helper
// ===========================
const chevronDown = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>`;

// ===========================
// Logo marquee brands
// ===========================
const brands = ['SEO', 'Social Media', 'Google Ads', 'Web Dev', 'Branding', 'Analytics'];

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
  { num: '01', name: 'Branding & Identity', desc: 'Membangun identitas merek yang kuat dan menonjol agar bisnis Anda tampil beda di tengah persaingan pasar.' },
  { num: '02', name: 'Web Design, Dev & UI/UX', desc: 'Pembuatan dan pengembangan website modern yang difokuskan pada pengalaman pengguna terbaik.' },
  { num: '03', name: 'Social Media Marketing', desc: 'Strategi pemasaran media sosial yang tepat sasaran untuk meningkatkan engagement dan brand awareness.' },
  { num: '04', name: 'Campaign Target & Optimisation', desc: 'Iklan berbayar yang ditargetkan secara presisi untuk mengonversi audiens menjadi pelanggan setia.' },
  { num: '05', name: 'Content Strategy', desc: 'Merancang konten yang relevan dan menarik untuk membangun koneksi autentik antara brand Anda dan audiens.' },
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
// Projects Data
// ===========================
const projects = [
  {
    num: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    images: {
      col1Top: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bot: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    images: {
      col1Top: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bot: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    images: {
      col1Top: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bot: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
];

function createProjectCards() {
  const totalCards = projects.length;
  return projects
    .map((p, i) => {
      const topOffset = i * 28;
      return `
    <div class="project-card-wrapper">
      <div class="project-card" data-index="${i}" style="top: calc(96px + ${topOffset}px);">
        <div class="project-card-top">
          <span class="project-number">${p.num}</span>
          <div class="project-meta">
            <span class="project-category">${p.category}</span>
            <h3 class="project-name">${p.name}</h3>
          </div>
          <a href="#" class="btn-live-project">Live Project</a>
        </div>
        <div class="project-images">
          <div class="project-col-left">
            <img class="project-img project-img-top" src="${p.images.col1Top}" alt="${p.name}" loading="lazy" />
            <img class="project-img project-img-bot" src="${p.images.col1Bot}" alt="${p.name}" loading="lazy" />
          </div>
          <div class="project-col-right">
            <img class="project-img project-img-full" src="${p.images.col2}" alt="${p.name}" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  `;
    })
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
  </div>

  <!-- Scrollable Content Layer -->
  <div class="scroll-content">

    <!-- Navbar -->
    <nav class="navbar" id="navbar">
      <a href="/" class="navbar-logo">
        <img src="${logoUrl}" alt="Digitalmarketings.id logo" />
      </a>
      <div class="navbar-center">
        <a href="#services" class="nav-item">Services</a>
        <a href="#about" class="nav-item">About</a>
        <a href="#gallery" class="nav-item">Portfolio</a>
        <a href="#projects" class="nav-item">Projects</a>
        <a href="#contact" class="nav-item">Contact</a>
      </div>
      <a href="#contact" class="btn-hero-secondary">Get in Touch</a>
    </nav>
    <div class="navbar-divider"></div>

    <!-- Hero Section -->
    <section class="hero-section" id="hero-section">
      <div class="hero-inner">
        <h1 class="hero-headline">
          Digi<span class="gradient-text">mar</span>
        </h1>
        <p class="hero-subtitle">
          We Turn Digital Presence Into Business Growth<br />We Are Your Growth Partners
        </p>
        <a href="https://wa.me/6285926461587" target="_blank" class="btn-cta-gradient" id="btn-cta">Free Consultation</a>
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

    <!-- Services Section — Numbered List -->
    <section class="content-section" id="services">
      <div class="glass-container">
        <div class="section-header">
          <p class="section-label" style="color: #a855f7;">What We Do</p>
          <h2 class="section-title">Services</h2>
        </div>
        <div class="service-list">
          ${createServiceItems()}
        </div>
      </div>
    </section>

    <!-- About Section — Editorial Style -->
    <section class="about-section" id="about">
      <div class="about-inner">
        <div class="section-header">
          <h2 class="section-title">About</h2>
        </div>

        <div class="about-card glass-container">
          <div class="about-story-block">
            <div class="about-accent-bar"></div>
            <div class="about-story-center">
              <p class="about-lead">Digimar didirikan dengan sebuah keyakinan sederhana: bahwa bisnis dari segala ukuran berhak mendapatkan akses ke <strong>pemasaran digital kelas dunia.</strong></p>
              <p class="about-body">Kami bermula sebagai tim ahli strategi, kreator, dan analis data yang penuh semangat — disatukan oleh misi untuk membantu brand tumbuh di tempat yang paling penting: ranah digital.</p>
              <p class="about-body">Kini, kami bermitra dengan berbagai bisnis di pasar lokal, regional, hingga internasional — menghadirkan strategi yang selalu disesuaikan, terukur, dan berfokus penuh pada pertumbuhan omzet Anda.</p>
            </div>
          </div>

          <div class="about-divider"></div>

          <div class="about-vm-grid">
            <div class="about-vm-card about-vm-item" id="about-vision">
              <span class="about-vm-icon">01</span>
              <h3 class="about-vm-name">Visi Kami</h3>
              <p class="about-vm-desc">Menjadi mitra pemasaran digital pilihan utama bagi bisnis yang ambisius — baik di tingkat lokal maupun global.</p>
            </div>
            <div class="about-vm-card about-vm-item" id="about-mission">
              <span class="about-vm-icon">02</span>
              <h3 class="about-vm-name">Misi Kami</h3>
              <p class="about-vm-desc">Memberdayakan brand melalui strategi pemasaran digital yang cerdas dan berbasis data untuk menciptakan pertumbuhan jangka panjang.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cara Kami Bekerja Section -->
    <section class="about-section" id="how-we-work">
      <div class="about-inner">
        <div class="section-header">
          <p class="section-label" style="color: #06b6d4;">Our Process</p>
          <h2 class="section-title">How We <span class="gradient-text">Work</span></h2>
        </div>
        <div class="about-vm-list">
          <div class="about-vm-item">
            <span class="about-vm-number">01</span>
            <div class="about-vm-info">
              <h3 class="about-vm-name">Utamakan Strategi</h3>
              <p class="about-vm-desc">Setiap kampanye dimulai dengan pemahaman mendalam tentang bisnis Anda, audiens Anda, dan tujuan Anda. Kami tidak sekadar menebak — kami merencanakan.</p>
            </div>
          </div>
          <div class="about-vm-item">
            <span class="about-vm-number">02</span>
            <div class="about-vm-info">
              <h3 class="about-vm-name">Berbasis Data</h3>
              <p class="about-vm-desc">Keputusan didorong oleh data performa real-time. Kami memantau, mengukur, dan mengoptimalkan setiap kampanye untuk memastikan investasi Anda memberikan hasil nyata.</p>
            </div>
          </div>
          <div class="about-vm-item">
            <span class="about-vm-number">03</span>
            <div class="about-vm-info">
              <h3 class="about-vm-name">Kemitraan Transparan</h3>
              <p class="about-vm-desc">Anda akan selalu tahu apa yang sedang kami kerjakan dan alasannya. Kami menjunjung tinggi komunikasi yang jelas, laporan yang jujur, dan hubungan yang dibangun atas dasar kepercayaan.</p>
            </div>
          </div>
          <div class="about-vm-item">
            <span class="about-vm-number">04</span>
            <div class="about-vm-info">
              <h3 class="about-vm-name">Fokus Pada Hasil</h3>
              <p class="about-vm-desc">Metrik semu (vanity metrics) bukanlah gaya kami. Kami berfokus pada angka-angka yang benar-benar menumbuhkan bisnis Anda — prospek, konversi, omzet, dan retensi pelanggan.</p>
            </div>
          </div>
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

    <!-- Projects Section — Sticky Stacking Cards -->
    <section class="projects-section" id="projects">
      <div class="section-header">
        <p class="section-label" style="color: #a855f7;">Case Studies</p>
        <h2 class="section-title">Project</h2>
      </div>
      <div class="projects-stack">
        ${createProjectCards()}
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
            <p class="footer-tagline">Siap mengakselerasi pertumbuhan digital bisnis Anda? Mari bicara.</p>
            <a href="https://wa.me/6285926461587" target="_blank" class="btn-cta-gradient">Free Consultation</a>
          </div>
          <div class="footer-info">
            <div class="footer-info-block">
              <h4 class="footer-info-label">Office</h4>
              <p class="footer-info-text">Jl. Drupadi XI No B10, Renon,<br/>Denpasar, Bali</p>
            </div>
            <div class="footer-info-block">
              <h4 class="footer-info-label">Phone</h4>
              <a href="tel:+6285926461587" class="footer-info-text footer-link">+62 8592 6461 587</a>
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
  const revealEls = document.querySelectorAll('.glass-container, .service-item, .about-story-center, .about-vm-item, .footer-cta, .footer-info-block');
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

// ===========================
// Projects Sticky Card Scaling
// ===========================
(function initProjectsScale() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;
  const totalCards = cards.length;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        cards.forEach((card, i) => {
          const wrapper = card.parentElement;
          const rect = wrapper.getBoundingClientRect();
          const wrapperHeight = wrapper.offsetHeight;

          // Calculate how far through this wrapper the scroll is
          const progress = Math.min(Math.max(-rect.top / wrapperHeight, 0), 1);

          // Target scale: last card stays 1.0, others scale down slightly
          const targetScale = 1 - (totalCards - 1 - i) * 0.03;
          const scale = 1 - progress * (1 - targetScale);

          card.style.transform = `scale(${scale})`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
