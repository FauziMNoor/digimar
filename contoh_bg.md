<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Inovasi Tingkat Lanjut — Platform Berbasis AI</title>
<meta name="description" content="Platform untuk inovasi tingkat lanjut. Alat berbasis AI yang membantu Anda membangun bisnis lebih cerdas, seketika." />

<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          background: 'hsl(0 0% 2.4%)',
          foreground: 'hsl(0 0% 100%)',
          hero: {
            DEFAULT: 'hsl(0 0% 4%)',
            foreground: 'hsl(0 0% 100%)',
            muted: 'hsl(0 0% 67%)',
            'badge-bg': 'rgba(0,0,0,0.1)',
            'badge-border': 'rgba(255,255,255,0.1)',
            'badge-text': 'hsl(0 0% 67%)',
            'secondary-bg': 'rgba(255,255,255,0.1)',
            'secondary-border': 'rgba(255,255,255,0.2)',
          },
        },
      },
    },
  };
</script>

<style>
  html, body { background:#060606; color:#fff; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; overflow-x: hidden; }
  ::-webkit-scrollbar { width:0; background:transparent; }
  * { scrollbar-width:none; -ms-overflow-style:none; }

  /* Marquee */
  @keyframes marquee { to { transform: translateX(-50%); } }
  .animate-marquee { animation: marquee 30s linear infinite; }

  /* Hero motion fades (Load animations) */
  @keyframes blurInUp20 {
    0%   { filter: blur(10px); opacity:0; transform: translateY(20px); }
    100% { filter: blur(0);    opacity:1; transform: translateY(0); }
  }
  @keyframes blurInUp30 {
    0%   { filter: blur(10px); opacity:0; transform: translateY(30px); }
    100% { filter: blur(0);    opacity:1; transform: translateY(0); }
  }
  .m-fade-p      { opacity:0; animation: blurInUp20 0.6s ease forwards; animation-delay: 0.8s; }
  .m-fade-cta    { opacity:0; animation: blurInUp20 0.6s ease forwards; animation-delay: 1.0s; }
  .m-fade-img    { opacity:0; animation: blurInUp30 0.8s ease forwards; animation-delay: 1.2s; }

  /* BlurText per-kata */
  .blur-text { display:flex; flex-wrap:wrap; justify-content:center; }
  .blur-text span {
    display:inline-block;
    will-change: transform, filter, opacity;
    filter: blur(10px); opacity:0; transform: translateY(50px);
    animation: blurWord 0.7s ease forwards;
  }
  @keyframes blurWord {
    0%   { filter: blur(10px); opacity:0;   transform: translateY(50px); }
    50%  { filter: blur(5px);  opacity:0.5; transform: translateY(-5px); }
    100% { filter: blur(0);    opacity:1;   transform: translateY(0); }
  }

  /* Scroll Reveal Animations */
  .scroll-reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }
  .scroll-reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* Staggered Delays (Hanya berlaku di layar besar agar di HP langsung muncul saat discroll) */
  @media (min-width: 1024px) {
    .delay-100 { transition-delay: 100ms; }
    .delay-200 { transition-delay: 200ms; }
    .delay-300 { transition-delay: 300ms; }
    .delay-400 { transition-delay: 400ms; }
    .delay-500 { transition-delay: 500ms; }
  }

  /* Mobile menu fade-in */
  @keyframes fadeIn { 0%{opacity:0;transform:translateY(-10px);} 100%{opacity:1;transform:translateY(0);} }
  .animate-fade-in { animation: fadeIn 0.2s ease-out; }

  /* Navbar mask gradient border */
  .nav-mask {
    -webkit-mask-image: linear-gradient(160deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 69%, rgb(0,0,0) 100%);
            mask-image: linear-gradient(160deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 69%, rgb(0,0,0) 100%);
  }

  /* Buttons */
  .btn { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; white-space:nowrap;
         font-weight:500; transition: background-color .2s, color .2s, opacity .2s; cursor:pointer; border:none; outline:none; }
  .btn:focus-visible { outline:2px solid #fff; outline-offset:2px; }
  .btn-hero { background:#fff; color:#000; border-radius:10px; height:49px; padding:0 1rem; font-weight:400; font-size:1rem; box-shadow: 0 4px 20px rgba(0,0,0,0.4); }
  .btn-hero:hover { background: rgba(255,255,255,0.9); }
  .btn-hero-secondary { background:#000; color:#fff; border-radius:10px; height:49px; padding:0 1rem; font-weight:400; font-size:1rem; }
  .btn-hero-secondary:hover { background: rgba(0,0,0,0.9); }
  .btn-sm { height:36px; padding:0 1.5rem; border-radius:10px; font-size:0.875rem; }
  .btn-default { background:#fff; color:#000; height:48px; padding:0 1rem; border-radius:10px; font-size:1rem; }
  .btn-default:hover { background: rgba(255,255,255,0.9); }

  .footer-bg { background: radial-gradient(35% 128px at 50% 0%, rgba(255,255,255,0.08), transparent); }

  /* FAQ Styles */
  .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.3s ease, opacity 0.3s ease; opacity: 0; }
  .faq-answer > div { overflow: hidden; }
  .faq-item.active .faq-answer { grid-template-rows: 1fr; opacity: 1; }
  .faq-item.active .faq-icon { transform: rotate(180deg); }
  .faq-item.active { border-color: rgba(255, 64, 0, 0.3); }
  .faq-item.active .faq-glow { opacity: 1; }

  @media (prefers-reduced-motion: reduce) {
    .m-fade-p, .m-fade-cta, .m-fade-img, .scroll-reveal, .blur-text > span { transition:none !important; animation:none !important; opacity:1 !important; filter:none !important; transform:none !important; }
  }
</style>
</head>
<body>

<!-- ========== NAVBAR ========== -->
<nav class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
  <div class="max-w-[75rem] mx-auto flex items-center justify-between">
    <div class="flex items-center">
      <div class="backdrop-blur-[10px] rounded-full p-2">
        <a href="#" class="block h-6">
          <img src="https://id-preview--d0ba0fc5-368a-4d18-96b8-a1621b38be6b.lovable.app/lovable-uploads/25b3039d-5f98-460a-9606-1510946f155d.png" alt="Logo" class="h-6 w-auto brightness-0 invert"/>
        </a>
      </div>
    </div>
    <div class="hidden md:flex items-center justify-center relative">
      <div class="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md"></div>
      <div class="absolute inset-0 rounded-full border border-white/30 nav-mask"></div>
      <div class="relative flex items-center gap-7 px-6 py-3">
        <a href="#features"  class="text-white/80 hover:text-white text-sm font-medium transition-colors">Fitur</a>
        <a href="#solutions" class="text-white/80 hover:text-white text-sm font-medium transition-colors">Solusi</a>
        <a href="#pricing"   class="text-white/80 hover:text-white text-sm font-medium transition-colors">Harga</a>
        <a href="#about"     class="text-white/80 hover:text-white text-sm font-medium transition-colors">Tentang</a>
        <a href="#contact"   class="text-white/80 hover:text-white text-sm font-medium transition-colors">Kontak</a>
      </div>
    </div>
    <div class="hidden md:flex items-center">
      <button class="btn btn-hero btn-sm px-6">Mulai Sekarang</button>
    </div>
    <div class="md:hidden">
      <button id="mobileToggle" aria-label="Toggle mobile menu" class="text-white p-2 backdrop-blur-md bg-white/10 rounded-full">
        <svg id="iconMenu"  xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg id="iconClose" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  </div>
  <div id="mobileMenu" class="hidden md:hidden animate-fade-in mt-4">
    <div class="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl px-4 py-4 space-y-1">
      <a href="#features"  class="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Fitur</a>
      <a href="#solutions" class="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Solusi</a>
      <a href="#pricing"   class="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Harga</a>
      <a href="#about"     class="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tentang</a>
      <a href="#contact"   class="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Kontak</a>
      <div class="pt-4"><button class="btn btn-hero w-full" style="border-radius:1rem;">Mulai Sekarang</button></div>
    </div>
  </div>
</nav>

<!-- ========== HERO ========== -->
<section class="w-full min-h-screen px-8 md:px-16 pt-32 flex items-start justify-center overflow-hidden relative">
  <div class="absolute inset-x-0 top-0 z-[1]" style="height:110vh;">
    <video id="heroVideo" class="w-full h-full object-cover" autoplay muted loop playsinline></video>
    <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent"></div>
  </div>
  <div class="absolute inset-0 z-[2]" style="background-color:#D9D9D9; mix-blend-mode:multiply; opacity:0.7;"></div>
  <div class="absolute inset-x-0 top-0 z-[3] pointer-events-none" style="height:110vh;">
    <canvas id="particles" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
  </div>
  <div class="absolute bottom-0 left-0 right-0 h-48 z-[5] bg-gradient-to-t from-background to-transparent pointer-events-none"></div>

  <div class="w-full max-w-[1280px] flex flex-col items-center gap-20 relative z-[4]">
    <div class="w-full max-w-5xl xl:max-w-6xl flex flex-col items-center gap-8">
      <div class="flex flex-wrap items-center justify-center gap-3">
        <div class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md">
          <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 18h6M10 22h4M15.09 14a5 5 0 1 0-6.18 0c.83.66 1.36 1.55 1.6 2.5h2.98c.24-.95.77-1.84 1.6-2.5z"/></svg>
          <span class="text-white/80 text-sm font-medium">Bisnis Cerdas</span>
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md">
          <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span class="text-white/80 text-sm font-medium">Berbasis AI</span>
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md">
          <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/></svg>
          <span class="text-white/80 text-sm font-medium">Seketika</span>
        </div>
      </div>

      <div class="flex flex-col items-center gap-6 text-center">
        <h1 id="heroTitle" class="blur-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[92px] text-white font-normal leading-tight tracking-tight"></h1>
        <p class="m-fade-p text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl drop-shadow-lg" style="text-shadow:0 2px 10px rgba(0,0,0,0.3);">
          Sistem kecerdasan buatan tingkat lanjut yang membantu Anda membangun serta mengembangkan bisnis menjadi lebih cerdas dan efisien, seketika.
        </p>
      </div>

      <div class="m-fade-cta flex flex-col sm:flex-row items-center gap-4">
        <button class="btn btn-hero w-full sm:w-auto">Mulai Secara Gratis</button>
        <div class="p-[1px] rounded-[10px] bg-gradient-to-r from-orange-500 to-blue-500 w-full sm:w-auto">
          <button class="btn btn-hero-secondary w-full">Mari Terhubung Bersama</button>
        </div>
      </div>
    </div>

    <div class="m-fade-img w-full max-w-5xl mt-8">
      <img src="https://www.image2url.com/r2/default/images/1777218301785-5217aea4-77a5-4136-b9ee-d8da6a88775c.jpeg" alt="Dashboard preview" class="w-full h-auto rounded-2xl shadow-2xl"/>
    </div>
  </div>
</section>

<!-- ========== LOGO MARQUEE ========== -->
<section class="w-full pb-16 pt-0 scroll-reveal" style="background:#050505;">
  <div class="w-full overflow-hidden sm:mt-24 mt-10">
    <div class="relative flex max-w-[90vw] overflow-hidden py-5">
      <div class="flex w-max animate-marquee">
        <!-- Set 1 -->
        <div class="mx-[4rem] flex items-center opacity-80" style="filter:saturate(0);">
          <svg class="h-[28px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 262 33"><path fill="#06b6d4" fill-rule="evenodd" clip-rule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"/><path fill="#fff" d="M80.996 13.652H76.284V22.772C76.284 25.204 77.88 25.166 80.996 25.014V28.7C74.688 29.46 72.18 27.712 72.18 22.772V13.652H68.684V9.7H72.18V4.596L76.284 3.38V9.7H80.996V13.652ZM107.85 28.7V9.7H111.954V28.7H107.85ZM116.704 28.7V0.96H120.808V28.7H116.704Z"/></svg>
        </div>
        <div class="mx-[4rem] flex items-center gap-3 opacity-80" style="filter:saturate(0);">
          <svg viewBox="0 0 14 21" class="h-[30px]" fill="#fff"><path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"/></svg>
          <span class="text-white text-xl font-bold">Motion</span>
        </div>
        <div class="mx-[4rem] flex items-center opacity-80" style="filter:saturate(0);">
          <svg class="h-[20px]" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 79"><path d="M261.919 0H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0Z"/><path d="M149.052 0V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0H149.052Z"/><path d="M183.32 0.066H165.506L229.312 79.372H247.178L215.271 39.746L247.127 0.127L229.312 0.154L206.352 28.67L183.32 0.066Z"/><path clip-rule="evenodd" d="M80.907 79.339L17.0151 0H0V79.306H13.6121V16.952L63.8067 79.339H80.907Z" fill-rule="evenodd"/></svg>
        </div>
        <div class="mx-[4rem] flex items-center opacity-80" style="filter:saturate(0);">
          <svg class="h-[40px]" viewBox="-45 -45 391 270"><g transform="translate(-1.668 -1.1)"><path fill="#fff" d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3L83.2 92c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9Q59.2 94.7 41.5 94.7c-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1Q28.75 5 36.1 3.2C41 1.9 46.2 1.3 51.7 1.3c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4z"/><path fill="#f90" d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6"/><path fill="#f90" d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5"/></g></svg>
        </div>
        <!-- Set 2 (duplicate) -->
        <div class="mx-[4rem] flex items-center opacity-80" style="filter:saturate(0);">
          <svg class="h-[28px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><path fill="#06b6d4" fill-rule="evenodd" clip-rule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0Z"/></svg>
        </div>
        <div class="mx-[4rem] flex items-center gap-3 opacity-80" style="filter:saturate(0);">
          <svg viewBox="0 0 14 21" class="h-[30px]" fill="#fff"><path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"/></svg>
          <span class="text-white text-xl font-bold">Motion</span>
        </div>
        <div class="mx-[4rem] flex items-center opacity-80" style="filter:saturate(0);">
          <span class="text-white text-2xl font-semibold tracking-wide">NEXT.JS</span>
        </div>
        <div class="mx-[4rem] flex items-center opacity-80" style="filter:saturate(0);">
          <span class="text-white text-2xl font-bold">aws</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== FEATURE SECTION 1 ========== -->
<section id="features" class="w-full py-12 lg:py-8 px-4" style="background:#050505;">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col lg:flex-row items-center gap-20">
      <div class="flex-1 max-w-2xl scroll-reveal">
        <div class="flex flex-col lg:space-y-20">
          <div class="space-y-5 order-1">
            <div class="inline-flex items-center gap-3 p-4 bg-black/10 border border-white/10 rounded-2xl backdrop-blur-md">
              <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              <span class="text-white/70 text-sm">Terintegrasi dengan</span>
            </div>
            <h2 class="text-white text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">Memberdayakan perubahan melalui teknologi</h2>
            <p class="text-white/70 text-base lg:text-lg leading-relaxed max-w-md">Banyak platform Web3 yang rumit dan memiliki kurva pembelajaran yang curam bagi para pengguna baru.</p>
          </div>
          <div class="flex-1 max-w-2xl lg:hidden order-2 my-8">
            <div class="relative w-full max-w-[450px] mx-auto flex items-center justify-center aspect-square overflow-visible">
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-gradient-to-tr from-[#ff3300]/20 to-transparent blur-[80px] rounded-full z-0"></div>

              <!-- Widget Frame -->
              <div class="w-full bg-[#1a1a1a] p-3 sm:p-4 rounded-[2.5rem] shadow-2xl relative z-10 border border-white/5" style="box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(255, 51, 0, 0.15);">
                  <!-- Widget Inner -->
                  <div class="bg-[#111111] w-full rounded-[2rem] p-4 sm:p-5 flex flex-col gap-2 border border-white/5">

                      <!-- BTC Card -->
                      <div class="bg-[#181818] rounded-[1.25rem] p-5 flex flex-col gap-4 border border-white/5">
                          <div class="flex justify-between items-center">
                              <span class="text-gray-400 text-sm font-medium">Bitcoin</span>
                              <div class="text-xs sm:text-sm text-gray-500 font-medium">
                                  Balance: <span class="text-[#ff4d00]">38506</span> <span class="text-gray-400">Max</span>
                              </div>
                          </div>
                          <div class="flex justify-between items-end">
                              <span class="btc-val text-3xl sm:text-[2.5rem] leading-none text-white font-medium tracking-tight">0.073658</span>
                              <span class="text-gray-500 text-xs sm:text-sm font-medium pb-1">Average</span>
                          </div>
                      </div>

                      <!-- Swap Divider -->
                      <div class="relative h-2 w-full flex items-center justify-center z-10">
                          <div class="absolute w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center">
                              <button aria-label="Swap" class="w-10 h-10 bg-[#181818] rounded-full flex items-center justify-center hover:bg-[#222] transition-colors border border-white/5">
                                  <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                  </svg>
                              </button>
                          </div>
                      </div>

                      <!-- ETH Card -->
                      <div class="bg-[#181818] rounded-[1.25rem] p-5 flex flex-col gap-4 border border-white/5 mt-1">
                          <div class="flex justify-between items-center">
                              <span class="text-gray-400 text-sm font-medium">Ethereum</span>
                              <div class="text-xs sm:text-sm text-gray-500 font-medium">
                                  Balance: <span class="text-[#ff4d00]">38506</span> <span class="text-gray-400">Max</span>
                              </div>
                          </div>
                          <div class="flex justify-between items-end">
                              <span class="eth-val text-3xl sm:text-[2.5rem] leading-none text-white font-medium tracking-tight">0.0865892</span>
                              <span class="text-gray-500 text-xs sm:text-sm font-medium pb-1">Estimate</span>
                          </div>
                      </div>

                      <!-- Sell Button -->
                      <button class="mt-auto w-full py-4 rounded-[1rem] text-white/90 font-medium text-lg mt-4 border border-white/5 transition-all hover:scale-[1.02] active:scale-[0.98]" style="background: linear-gradient(90deg, #ff4000 0%, #8a2300 40%, #1c1c1c 100%); box-shadow: inset 0 2px 4px rgba(255,255,255,0.1);">
                          Sell Now
                      </button>

                  </div>
              </div>
            </div>
          </div>
          <div class="space-y-6 max-w-md order-3">
            <div class="flex items-center gap-6">
              <svg class="w-6 h-6 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/></svg>
              <span class="text-white/70 text-base lg:text-lg">Bot Tugas Internal</span>
            </div>
            <div class="flex items-center gap-6">
              <svg class="w-6 h-6 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>
              <span class="text-white/70 text-base lg:text-lg">100+ Otomatisasi</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block flex-1 max-w-2xl my-8 scroll-reveal delay-200">
        <div class="relative w-full lg:h-[577px] flex items-center justify-center overflow-visible">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-tr from-[#ff3300]/20 to-transparent blur-[100px] rounded-full z-0 w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <!-- Widget Frame -->
          <div class="w-full max-w-[420px] bg-[#1a1a1a] p-4 rounded-[2.5rem] shadow-2xl relative z-10 border border-white/5" style="box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(255, 51, 0, 0.15);">
              <!-- Widget Inner -->
              <div class="bg-[#111111] w-full rounded-[2rem] p-5 flex flex-col gap-2 border border-white/5">

                  <!-- BTC Card -->
                  <div class="bg-[#181818] rounded-[1.25rem] p-5 flex flex-col gap-4 border border-white/5">
                      <div class="flex justify-between items-center">
                          <span class="text-gray-400 text-sm font-medium">Bitcoin</span>
                          <div class="text-xs sm:text-sm text-gray-500 font-medium">
                              Balance: <span class="text-[#ff4d00]">38506</span> <span class="text-gray-400">Max</span>
                          </div>
                      </div>
                      <div class="flex justify-between items-end">
                          <span class="btc-val text-3xl sm:text-[2.5rem] leading-none text-white font-medium tracking-tight">0.073658</span>
                          <span class="text-gray-500 text-xs sm:text-sm font-medium pb-1">Average</span>
                      </div>
                  </div>

                  <!-- Swap Divider -->
                  <div class="relative h-2 w-full flex items-center justify-center z-10">
                      <div class="absolute w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center">
                          <button aria-label="Swap" class="w-10 h-10 bg-[#181818] rounded-full flex items-center justify-center hover:bg-[#222] transition-colors border border-white/5">
                              <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                              </svg>
                          </button>
                      </div>
                  </div>

                  <!-- ETH Card -->
                  <div class="bg-[#181818] rounded-[1.25rem] p-5 flex flex-col gap-4 border border-white/5 mt-1">
                      <div class="flex justify-between items-center">
                          <span class="text-gray-400 text-sm font-medium">Ethereum</span>
                          <div class="text-xs sm:text-sm text-gray-500 font-medium">
                              Balance: <span class="text-[#ff4d00]">38506</span> <span class="text-gray-400">Max</span>
                          </div>
                      </div>
                      <div class="flex justify-between items-end">
                          <span class="eth-val text-3xl sm:text-[2.5rem] leading-none text-white font-medium tracking-tight">0.0865892</span>
                          <span class="text-gray-500 text-xs sm:text-sm font-medium pb-1">Estimate</span>
                      </div>
                  </div>

                  <!-- Sell Button -->
                  <button class="mt-auto w-full py-4 rounded-[1rem] text-white/90 font-medium text-lg mt-4 border border-white/5 transition-all hover:scale-[1.02] active:scale-[0.98]" style="background: linear-gradient(90deg, #ff4000 0%, #8a2300 40%, #1c1c1c 100%); box-shadow: inset 0 2px 4px rgba(255,255,255,0.1);">
                      Sell Now
                  </button>

              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== FEATURE SECTION 2 ========== -->
<section class="w-full py-12 lg:py-8 px-4" style="background:#050505;">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col lg:flex-row-reverse items-center gap-20">
      <div class="flex-1 max-w-2xl scroll-reveal">
        <div class="flex flex-col lg:space-y-20">
          <div class="space-y-5 order-1">
            <div class="inline-flex items-center gap-3 p-4 bg-black/10 border border-white/10 rounded-2xl backdrop-blur-md">
              <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>
              <span class="text-white/70 text-sm">Ditenagai oleh AI</span>
            </div>
            <h2 class="text-white text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">Mempercepat alur kerja melalui otomatisasi</h2>
            <p class="text-white/70 text-base lg:text-lg leading-relaxed max-w-md">Otomatisasi pintar mengurangi tugas manual hingga 40%, merampingkan operasi untuk hasil yang jauh lebih cepat.</p>
          </div>
          <div class="flex-1 max-w-2xl lg:hidden order-2 my-8">
            <div class="relative w-full max-w-[450px] mx-auto flex items-center justify-center aspect-square overflow-visible">
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-gradient-to-tr from-[#ff3300]/20 to-transparent blur-[80px] rounded-full z-0"></div>

              <!-- Widget Frame -->
              <div class="w-full bg-[#1a1a1a] p-4 sm:p-5 rounded-[2.5rem] shadow-2xl relative z-10 border border-white/5" style="box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(255, 51, 0, 0.15);">
                  <!-- Widget Inner -->
                  <div class="bg-[#111111] w-full rounded-[2rem] p-5 sm:p-6 flex flex-col gap-6 border border-white/5">
                      <!-- Header -->
                      <div class="flex justify-between items-center">
                          <span class="text-white font-medium text-lg">Audiens</span>
                          <button aria-label="Menu" class="w-8 h-8 rounded-full bg-[#181818] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z"/></svg>
                          </button>
                      </div>

                      <!-- Gauge Area -->
                      <div class="relative w-full aspect-[2/1.2] mt-2 flex justify-center">
                          <svg viewBox="0 0 200 120" class="w-full h-full drop-shadow-2xl">
                              <defs>
                                  <linearGradient id="gaugeGradientMob" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stop-color="#ff5500" />
                                      <stop offset="100%" stop-color="#8a2300" />
                                  </linearGradient>
                                  <clipPath id="gaugeClipMob">
                                      <rect class="gauge-clip-rect" x="0" y="0" width="140" height="120" style="transition: width 1s ease-in-out;" />
                                  </clipPath>
                              </defs>
                              <!-- Background Track -->
                              <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#222" stroke-width="26" stroke-linecap="butt" stroke-dasharray="14 4" />
                              <!-- Foreground Track -->
                              <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#gaugeGradientMob)" stroke-width="26" stroke-linecap="butt" stroke-dasharray="14 4" clip-path="url(#gaugeClipMob)" />
                          </svg>
                          <!-- Center Text -->
                          <div class="absolute inset-0 flex flex-col items-center justify-end pb-2">
                              <span class="gauge-val text-3xl sm:text-4xl text-white font-bold tracking-tight">75.5%</span>
                              <span class="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">Pertumbuhan Penjualan</span>
                          </div>
                      </div>

                      <!-- Bottom Cards -->
                      <div class="grid grid-cols-2 gap-3 sm:gap-4 mt-2">
                          <div class="bg-[#181818] p-3 sm:p-4 rounded-2xl border border-white/5 flex flex-col gap-2 sm:gap-3">
                              <span class="text-gray-400 text-[11px] sm:text-xs font-medium">Facebook</span>
                              <div class="flex items-center justify-between">
                                  <span class="fb-val text-lg sm:text-xl text-white font-semibold">3,343</span>
                                  <span class="bg-gradient-to-r from-[#ff4000] to-[#b32d00] text-white text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5 font-bold">
                                      4.5% <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                                  </span>
                              </div>
                          </div>
                          <div class="bg-[#181818] p-3 sm:p-4 rounded-2xl border border-white/5 flex flex-col gap-2 sm:gap-3">
                              <span class="text-gray-400 text-[11px] sm:text-xs font-medium">Instagram</span>
                              <div class="flex items-center justify-between">
                                  <span class="ig-val text-lg sm:text-xl text-white font-semibold">40.9k</span>
                                  <span class="bg-[#222] text-gray-400 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5 font-bold">
                                      -4.5% <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" /></svg>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="space-y-6 max-w-md order-3">
            <div class="flex items-center gap-6">
              <svg class="w-6 h-6 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/></svg>
              <span class="text-white/70 text-base lg:text-lg">Asisten AI Pintar</span>
            </div>
            <div class="flex items-center gap-6">
              <svg class="w-6 h-6 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>
              <span class="text-white/70 text-base lg:text-lg">Eksekusi 40% Lebih Cepat</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block flex-1 max-w-2xl my-8 scroll-reveal delay-200">
        <div class="relative w-full lg:h-[577px] flex items-center justify-center overflow-visible">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-tr from-[#ff3300]/20 to-transparent blur-[100px] rounded-full z-0 w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <!-- Widget Frame -->
          <div class="w-full max-w-[420px] bg-[#1a1a1a] p-4 rounded-[2.5rem] shadow-2xl relative z-10 border border-white/5" style="box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(255, 51, 0, 0.15);">
              <!-- Widget Inner -->
              <div class="bg-[#111111] w-full rounded-[2rem] p-6 flex flex-col gap-6 border border-white/5">
                  <!-- Header -->
                  <div class="flex justify-between items-center">
                      <span class="text-white font-medium text-lg">Audiens</span>
                      <button aria-label="Menu" class="w-8 h-8 rounded-full bg-[#181818] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z"/></svg>
                      </button>
                  </div>

                  <!-- Gauge Area -->
                  <div class="relative w-full aspect-[2/1.2] mt-2 flex justify-center">
                      <svg viewBox="0 0 200 120" class="w-full h-full drop-shadow-2xl">
                          <defs>
                              <linearGradient id="gaugeGradientDesk" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stop-color="#ff5500" />
                                  <stop offset="100%" stop-color="#8a2300" />
                              </linearGradient>
                              <clipPath id="gaugeClipDesk">
                                  <rect class="gauge-clip-rect" x="0" y="0" width="140" height="120" style="transition: width 1s ease-in-out;" />
                              </clipPath>
                          </defs>
                          <!-- Background Track -->
                          <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#222" stroke-width="26" stroke-linecap="butt" stroke-dasharray="14 4" />
                          <!-- Foreground Track -->
                          <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#gaugeGradientDesk)" stroke-width="26" stroke-linecap="butt" stroke-dasharray="14 4" clip-path="url(#gaugeClipDesk)" />
                      </svg>
                      <!-- Center Text -->
                      <div class="absolute inset-0 flex flex-col items-center justify-end pb-2">
                          <span class="gauge-val text-4xl text-white font-bold tracking-tight">75.5%</span>
                          <span class="text-xs text-gray-500 mt-1 font-medium">Pertumbuhan Penjualan</span>
                      </div>
                  </div>

                  <!-- Bottom Cards -->
                  <div class="grid grid-cols-2 gap-4 mt-2">
                      <div class="bg-[#181818] p-4 rounded-2xl border border-white/5 flex flex-col gap-3">
                          <span class="text-gray-400 text-xs font-medium">Facebook</span>
                          <div class="flex items-center justify-between">
                              <span class="fb-val text-xl text-white font-semibold">3,343</span>
                              <span class="bg-gradient-to-r from-[#ff4000] to-[#b32d00] text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5 font-bold">
                                  4.5% <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                              </span>
                          </div>
                      </div>
                      <div class="bg-[#181818] p-4 rounded-2xl border border-white/5 flex flex-col gap-3">
                          <span class="text-gray-400 text-xs font-medium">Instagram</span>
                          <div class="flex items-center justify-between">
                              <span class="ig-val text-xl text-white font-semibold">40.9k</span>
                              <span class="bg-[#222] text-gray-400 text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5 font-bold">
                                  -4.5% <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" /></svg>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== FEATURE SECTION 3 ========== -->
<section class="w-full py-12 lg:py-8 px-4" style="background:#050505;">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col lg:flex-row items-center gap-20">
      <div class="flex-1 max-w-2xl scroll-reveal">
        <div class="flex flex-col lg:space-y-20">
          <div class="space-y-5 order-1">
            <div class="inline-flex items-center gap-3 p-4 bg-black/10 border border-white/10 rounded-2xl backdrop-blur-md">
              <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>
              <span class="text-white/70 text-sm">Kualitas Ultra HD</span>
            </div>
            <h2 class="text-white text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">Membuat konten dengan kualitas memukau</h2>
            <p class="text-white/70 text-base lg:text-lg leading-relaxed max-w-md">Perekaman 4K profesional memberikan video sebening kristal untuk pengalaman pengguna yang sangat luar biasa.</p>
          </div>
          <div class="flex-1 max-w-2xl lg:hidden order-2 my-8">
            <div class="relative w-full max-w-[450px] mx-auto flex items-center justify-center aspect-[4/3] overflow-visible">
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-gradient-to-tr from-[#ff3300]/20 to-transparent blur-[80px] rounded-full z-0"></div>

              <!-- Widget Frame -->
              <div class="w-full bg-[#1a1a1a] p-3 sm:p-5 rounded-[2.5rem] shadow-2xl relative z-10 border border-white/5" style="box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(255, 51, 0, 0.15);">
                  <!-- Widget Inner -->
                  <div class="bg-[#111111] w-full rounded-[2rem] p-4 sm:p-6 flex flex-col gap-6 border border-white/5">
                      
                      <!-- Header -->
                      <div class="flex justify-between items-start">
                          <div class="flex flex-col gap-1">
                              <span class="text-gray-400 text-xs sm:text-sm font-medium">Arus Kas</span>
                              <span class="cf-total text-xl sm:text-[26px] text-white font-bold tracking-tight">Rp 540.323.450</span>
                          </div>
                          <div class="flex bg-[#181818] p-1 rounded-full border border-white/5">
                              <button class="px-2 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-xs font-medium text-white bg-transparent transition-colors hover:bg-white/5">Bulanan</button>
                              <button class="px-2 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-xs font-medium text-white bg-gradient-to-r from-[#ff5500] to-[#b32d00] shadow-sm flex items-center gap-1">
                                  <span class="w-1 h-1 rounded-full bg-white/80"></span> Tahunan
                              </button>
                          </div>
                      </div>

                      <!-- Chart Area -->
                      <div class="flex h-36 sm:h-48 mt-2 relative">
                          <!-- Y Axis -->
                          <div class="flex flex-col justify-between text-[9px] sm:text-[10px] text-gray-500 py-2 pr-2 sm:pr-4 h-full">
                              <span>50jt</span>
                              <span>40jt</span>
                              <span>30jt</span>
                              <span>20jt</span>
                              <span>10jt</span>
                              <span>0</span>
                          </div>
                          
                          <!-- Bars -->
                          <div class="flex-1 flex items-end justify-between gap-1 sm:gap-2 h-full pb-6 relative">
                              
                              <!-- Tooltip (Absolute) -->
                              <div class="cf-tooltip absolute left-[45%] bottom-[85%] bg-[#1c1c1c] p-2.5 sm:p-3 rounded-xl border border-white/10 shadow-2xl z-20 w-36 sm:w-44 transform -translate-x-1/2 -translate-y-2 pointer-events-none transition-all duration-700 ease-in-out">
                                  <div class="text-[9px] sm:text-[10px] text-gray-400 mb-2">23 Jul 2026</div>
                                  <div class="flex justify-between text-[9px] sm:text-[10px] mb-1.5"><span class="text-gray-400">Arus Kas</span><span class="text-white font-medium cf-tt-val1">Rp 34.845.000</span></div>
                                  <div class="flex justify-between text-[9px] sm:text-[10px]"><span class="text-gray-400">Pemasukan</span><span class="text-white font-medium cf-tt-val2">-Rp 8.456.000</span></div>
                              </div>

                              <!-- Bars 1-7 -->
                              <div class="flex flex-col items-center justify-end h-full w-full relative">
                                  <div class="w-full max-w-[24px] sm:max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[30%] cf-bar"></div>
                                  <span class="absolute -bottom-6 text-[9px] sm:text-[10px] text-gray-500 font-medium">Jan</span>
                              </div>
                              <div class="flex flex-col items-center justify-end h-full w-full relative">
                                  <div class="w-full max-w-[24px] sm:max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[25%] cf-bar"></div>
                                  <span class="absolute -bottom-6 text-[9px] sm:text-[10px] text-gray-500 font-medium">Feb</span>
                              </div>
                              <div class="flex flex-col items-center justify-end h-full w-full relative group">
                                  <div class="w-full max-w-[28px] sm:max-w-[36px] bg-gradient-to-t from-white via-[#ff8855] to-[#ff4000] rounded-full transition-all duration-700 ease-in-out h-[80%] cf-bar cf-active shadow-[0_0_15px_rgba(255,64,0,0.3)] relative">
                                      <div class="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full border-[2px] border-[#111] bg-[#ff4000] z-10 transition-all duration-700 cf-dot shadow-[0_0_8px_rgba(255,64,0,0.8)]"></div>
                                      <div class="absolute top-3 bottom-2 left-1/2 transform -translate-x-1/2 w-[1px] sm:w-[1.5px] bg-white/20 rounded-full"></div>
                                  </div>
                                  <span class="absolute -bottom-6 text-[9px] sm:text-[10px] text-gray-200 font-medium">Mar</span>
                              </div>
                              <div class="flex flex-col items-center justify-end h-full w-full relative">
                                  <div class="w-full max-w-[24px] sm:max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[40%] cf-bar"></div>
                                  <span class="absolute -bottom-6 text-[9px] sm:text-[10px] text-gray-500 font-medium">Apr</span>
                              </div>
                              <div class="flex flex-col items-center justify-end h-full w-full relative">
                                  <div class="w-full max-w-[24px] sm:max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[65%] cf-bar"></div>
                                  <span class="absolute -bottom-6 text-[9px] sm:text-[10px] text-gray-500 font-medium">Mei</span>
                              </div>
                              <div class="flex flex-col items-center justify-end h-full w-full relative">
                                  <div class="w-full max-w-[24px] sm:max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[20%] cf-bar"></div>
                                  <span class="absolute -bottom-6 text-[9px] sm:text-[10px] text-gray-500 font-medium">Jun</span>
                              </div>
                              <div class="flex flex-col items-center justify-end h-full w-full relative">
                                  <div class="w-full max-w-[24px] sm:max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[35%] cf-bar"></div>
                                  <span class="absolute -bottom-6 text-[9px] sm:text-[10px] text-gray-500 font-medium">Jul</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="space-y-6 max-w-md order-3">
            <div class="flex items-center gap-6">
              <svg class="w-6 h-6 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/></svg>
              <span class="text-white/70 text-base lg:text-lg">Perekaman Video 4K</span>
            </div>
            <div class="flex items-center gap-6">
              <svg class="w-6 h-6 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>
              <span class="text-white/70 text-base lg:text-lg">Streaming Ultra HD</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block flex-1 max-w-2xl my-8 scroll-reveal delay-200">
        <div class="relative w-full lg:h-[577px] flex items-center justify-center overflow-visible">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-tr from-[#ff3300]/20 to-transparent blur-[100px] rounded-full z-0 w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <!-- Widget Frame -->
          <div class="w-full max-w-[450px] bg-[#1a1a1a] p-5 rounded-[2.5rem] shadow-2xl relative z-10 border border-white/5" style="box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(255, 51, 0, 0.15);">
              <!-- Widget Inner -->
              <div class="bg-[#111111] w-full rounded-[2rem] p-6 flex flex-col gap-6 border border-white/5">
                  
                  <!-- Header -->
                  <div class="flex justify-between items-start">
                      <div class="flex flex-col gap-1">
                          <span class="text-gray-400 text-sm font-medium">Arus Kas</span>
                          <span class="cf-total text-[28px] text-white font-bold tracking-tight">Rp 540.323.450</span>
                      </div>
                      <div class="flex bg-[#181818] p-1 rounded-full border border-white/5">
                          <button class="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-transparent transition-colors hover:bg-white/5">Bulanan</button>
                          <button class="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-[#ff5500] to-[#b32d00] shadow-sm flex items-center gap-1">
                              <span class="w-1 h-1 rounded-full bg-white/80"></span> Tahunan
                          </button>
                      </div>
                  </div>

                  <!-- Chart Area -->
                  <div class="flex h-52 mt-4 relative">
                      <!-- Y Axis -->
                      <div class="flex flex-col justify-between text-[10px] text-gray-500 py-2 pr-4 h-full">
                          <span>50jt</span>
                          <span>40jt</span>
                          <span>30jt</span>
                          <span>20jt</span>
                          <span>10jt</span>
                          <span>0</span>
                      </div>
                      
                      <!-- Bars -->
                      <div class="flex-1 flex items-end justify-between gap-2 h-full pb-6 relative">
                          
                          <!-- Tooltip (Absolute) -->
                          <div class="cf-tooltip absolute left-[45%] bottom-[85%] bg-[#1c1c1c] p-3 rounded-xl border border-white/10 shadow-2xl z-20 w-44 transform -translate-x-1/2 -translate-y-2 pointer-events-none transition-all duration-700 ease-in-out">
                              <div class="text-[10px] text-gray-400 mb-2">23 Jul 2026</div>
                              <div class="flex justify-between text-[10px] mb-1.5"><span class="text-gray-400">Arus Kas</span><span class="text-white font-medium cf-tt-val1">Rp 34.845.000</span></div>
                              <div class="flex justify-between text-[10px]"><span class="text-gray-400">Pemasukan</span><span class="text-white font-medium cf-tt-val2">-Rp 8.456.000</span></div>
                          </div>

                          <!-- Bars 1-7 -->
                          <div class="flex flex-col items-center justify-end h-full w-full relative">
                              <div class="w-full max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[30%] cf-bar"></div>
                              <span class="absolute -bottom-6 text-[10px] text-gray-500 font-medium">Jan</span>
                          </div>
                          <div class="flex flex-col items-center justify-end h-full w-full relative">
                              <div class="w-full max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[25%] cf-bar"></div>
                              <span class="absolute -bottom-6 text-[10px] text-gray-500 font-medium">Feb</span>
                          </div>
                          <div class="flex flex-col items-center justify-end h-full w-full relative group">
                              <div class="w-full max-w-[36px] bg-gradient-to-t from-white via-[#ff8855] to-[#ff4000] rounded-full transition-all duration-700 ease-in-out h-[80%] cf-bar cf-active shadow-[0_0_15px_rgba(255,64,0,0.3)] relative">
                                  <div class="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full border-[2.5px] border-[#111] bg-[#ff4000] z-10 transition-all duration-700 cf-dot shadow-[0_0_8px_rgba(255,64,0,0.8)]"></div>
                                  <div class="absolute top-4 bottom-2 left-1/2 transform -translate-x-1/2 w-[1.5px] bg-white/20 rounded-full"></div>
                              </div>
                              <span class="absolute -bottom-6 text-[10px] text-gray-200 font-medium">Mar</span>
                          </div>
                          <div class="flex flex-col items-center justify-end h-full w-full relative">
                              <div class="w-full max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[40%] cf-bar"></div>
                              <span class="absolute -bottom-6 text-[10px] text-gray-500 font-medium">Apr</span>
                          </div>
                          <div class="flex flex-col items-center justify-end h-full w-full relative">
                              <div class="w-full max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[65%] cf-bar"></div>
                              <span class="absolute -bottom-6 text-[10px] text-gray-500 font-medium">Mei</span>
                          </div>
                          <div class="flex flex-col items-center justify-end h-full w-full relative">
                              <div class="w-full max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[20%] cf-bar"></div>
                              <span class="absolute -bottom-6 text-[10px] text-gray-500 font-medium">Jun</span>
                          </div>
                          <div class="flex flex-col items-center justify-end h-full w-full relative">
                              <div class="w-full max-w-[32px] bg-gradient-to-t from-[#222] to-[#333] rounded-full transition-all duration-700 ease-in-out h-[35%] cf-bar"></div>
                              <span class="absolute -bottom-6 text-[10px] text-gray-500 font-medium">Jul</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== JOURNEY ========== -->
<section class="w-full mt-[150px] pb-12 lg:pb-16 px-4" style="background:#050505;">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 scroll-reveal">
        <div class="flex-1 max-w-2xl">
          <div class="flex flex-col gap-4">
            <span class="text-white text-base">Perjalanan Kami</span>
            <h2 class="text-white text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">Sistem AI khusus, dibangun untuk keuangan</h2>
          </div>
        </div>
        <div class="flex-1 max-w-lg">
          <p class="text-white/70 text-base leading-relaxed">Memberikan kemajuan kecerdasan buatan terbaru untuk menyelesaikan tantangan spesifik Anda, memastikan peningkatan efisiensi dan pertumbuhan wawasan.</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- CARD 1: Fokus Keuangan (My Wallet Widget) -->
        <div class="group scroll-reveal delay-100">
          <div class="p-4 pb-8 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div class="relative w-full h-64 mb-6 rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                <!-- Inner Dashboard Container -->
                <div class="absolute inset-[1px] bg-[#111111] rounded-2xl flex flex-col p-4 z-10 overflow-hidden">
                    <!-- Glow -->
                    <div class="absolute top-0 right-0 w-32 h-32 bg-[#ff4000]/20 blur-[40px] rounded-full pointer-events-none"></div>
                    
                    <div class="flex justify-between items-start mb-3 relative z-10">
                        <div>
                            <h4 class="text-white text-sm font-semibold">Dompet Saya</h4>
                            <p class="text-gray-500 text-[9px] mt-0.5">Hari ini 1 USD = Rp 15.600</p>
                        </div>
                        <button class="bg-[#ff4000] hover:bg-[#ff5500] text-white text-[9px] font-medium px-2.5 py-1.5 rounded-full transition-colors flex items-center gap-1 shadow-md">
                            <svg class="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                            Tambah Baru
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-2 h-full relative z-10">
                        <!-- Card USD -->
                        <div class="bg-[#1c1c1c] rounded-xl p-3 border border-white/5 flex flex-col justify-between hover:border-[#ff4000]/50 transition-colors group/card">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-1.5"><span class="text-[10px]">🇺🇸</span><span class="text-gray-300 text-[10px] font-medium">USD</span></div>
                                <div class="text-gray-600 font-serif text-[10px] cursor-pointer">⋮</div>
                            </div>
                            <div class="mt-1.5">
                                <div class="w-usd text-white text-[13px] font-bold tracking-tight">$24,678.00</div>
                                <div class="text-gray-500 text-[7px] mt-0.5">Limit $10k per bulan</div>
                                <div class="text-[#ff4000] text-[8px] mt-1.5 font-medium group-hover/card:animate-pulse">Aktif</div>
                            </div>
                        </div>
                        <!-- Card EUR -->
                        <div class="bg-[#1c1c1c] rounded-xl p-3 border border-white/5 flex flex-col justify-between hover:border-[#ff4000]/50 transition-colors group/card">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-1.5"><span class="text-[10px]">🇩🇪</span><span class="text-gray-300 text-[10px] font-medium">EUR</span></div>
                                <div class="text-gray-600 font-serif text-[10px] cursor-pointer">⋮</div>
                            </div>
                            <div class="mt-1.5">
                                <div class="w-eur text-white text-[13px] font-bold tracking-tight">€28,345.00</div>
                                <div class="text-gray-500 text-[7px] mt-0.5">Limit €8k per bulan</div>
                                <div class="text-[#ff4000] text-[8px] mt-1.5 font-medium group-hover/card:animate-pulse">Aktif</div>
                            </div>
                        </div>
                        <!-- Card AUD -->
                        <div class="bg-[#1c1c1c] rounded-xl p-3 border border-white/5 flex flex-col justify-between hover:border-[#ff4000]/50 transition-colors group/card">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-1.5"><span class="text-[10px]">🇦🇺</span><span class="text-gray-300 text-[10px] font-medium">AUD</span></div>
                                <div class="text-gray-600 font-serif text-[10px] cursor-pointer">⋮</div>
                            </div>
                            <div class="mt-1.5">
                                <div class="w-aud text-white text-[13px] font-bold tracking-tight">$20,517.52</div>
                                <div class="text-gray-500 text-[7px] mt-0.5">Limit $10k per bulan</div>
                                <div class="text-[#ff4000] text-[8px] mt-1.5 font-medium group-hover/card:animate-pulse">Aktif</div>
                            </div>
                        </div>
                        <!-- Card GBP -->
                        <div class="bg-[#1c1c1c] rounded-xl p-3 border border-white/5 flex flex-col justify-between hover:border-red-500/50 transition-colors group/card">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-1.5"><span class="text-[10px]">🇬🇧</span><span class="text-gray-300 text-[10px] font-medium">GBP</span></div>
                                <div class="text-gray-600 font-serif text-[10px] cursor-pointer">⋮</div>
                            </div>
                            <div class="mt-1.5">
                                <div class="w-gbp text-white text-[13px] font-bold tracking-tight opacity-70">£25,000.00</div>
                                <div class="text-gray-500 text-[7px] mt-0.5">Limit £7.5k per bulan</div>
                                <div class="text-red-500 text-[8px] mt-1.5 font-medium opacity-80">Tidak Aktif</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center text-center gap-2">
              <h3 class="text-white text-2xl">Fokus Keuangan</h3>
              <p class="text-white/70 text-base leading-relaxed">Tim kami menjembatani kesenjangan antara keuangan dan teknologi, mendorong komitmen kami terhadap hasil nyata.</p>
            </div>
          </div>
        </div>

        <!-- CARD 2: Inovasi AI (AI Node Widget) -->
        <div class="group scroll-reveal delay-200">
          <div class="p-4 pb-8 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div class="relative w-full h-64 mb-6 rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                <div class="absolute inset-[1px] bg-[#111111] rounded-2xl flex items-center justify-center z-10 overflow-hidden">
                    <div class="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff4000]/15 to-transparent pointer-events-none"></div>
                    
                    <!-- Pulsing Rings -->
                    <div class="absolute w-48 h-48 border-[1px] border-white/5 rounded-full animate-[spin_12s_linear_infinite] border-t-[#ff4000]/40 border-l-[#ff4000]/20"></div>
                    <div class="absolute w-36 h-36 border-[1px] border-white/10 rounded-full animate-[spin_8s_linear_infinite_reverse] border-b-[#ff4000]/60 border-r-[#ff4000]/30"></div>
                    <div class="absolute w-20 h-20 border-[1.5px] border-white/20 rounded-full animate-[spin_4s_linear_infinite] border-t-[#ff4000] border-r-[#ff4000]"></div>
                    
                    <!-- Core -->
                    <div class="w-8 h-8 bg-gradient-to-tr from-[#ff4000] to-[#ffaa00] rounded-full shadow-[0_0_30px_#ff4000] animate-pulse z-10 flex items-center justify-center">
                        <div class="w-3 h-3 bg-white rounded-full shadow-inner"></div>
                    </div>

                    <!-- Overlay UI -->
                    <div class="absolute top-4 left-4 flex gap-2 items-center bg-black/40 px-2 py-1 rounded-md border border-white/5 backdrop-blur-sm">
                        <div class="w-1.5 h-1.5 rounded-full bg-[#ff4000] animate-ping"></div>
                        <span class="text-white text-[9px] font-medium tracking-wide">Model Pelatihan</span>
                    </div>
                    
                    <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end bg-black/40 p-2 rounded-lg border border-white/5 backdrop-blur-sm">
                        <div class="flex flex-col">
                            <span class="text-gray-400 text-[8px] font-medium uppercase tracking-wider">Status Sistem</span>
                            <span class="text-[#ff4000] text-[11px] font-bold ai-status">Optimal</span>
                        </div>
                        <div class="flex gap-1 items-end h-8">
                            <div class="w-1.5 bg-[#ff4000] rounded-t-sm ai-bar transition-all duration-300" style="height: 60%"></div>
                            <div class="w-1.5 bg-[#ff4000] rounded-t-sm ai-bar transition-all duration-300" style="height: 80%"></div>
                            <div class="w-1.5 bg-white/30 rounded-t-sm ai-bar transition-all duration-300" style="height: 40%"></div>
                            <div class="w-1.5 bg-white/30 rounded-t-sm ai-bar transition-all duration-300" style="height: 90%"></div>
                            <div class="w-1.5 bg-[#ff4000]/60 rounded-t-sm ai-bar transition-all duration-300" style="height: 50%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center text-center gap-2">
              <h3 class="text-white text-2xl">Inovasi AI</h3>
              <p class="text-white/70 text-base leading-relaxed">Kami membangun tim ahli untuk menggabungkan pengetahuan keuangan mendalam dengan sistem AI yang canggih.</p>
            </div>
          </div>
        </div>

        <!-- CARD 3: Pemberdayaan Klien (Deal Flow Wave Widget) -->
        <div class="group scroll-reveal delay-300">
          <div class="p-4 pb-8 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div class="relative w-full h-64 mb-6 rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                <div class="absolute inset-[1px] bg-[#111111] rounded-2xl flex flex-col p-4 z-10 overflow-hidden">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#ff4000]/15 blur-[50px] rounded-full pointer-events-none z-0"></div>
                    
                    <div class="flex justify-between items-start z-10">
                        <div>
                            <h4 class="text-white text-sm font-semibold mb-0.5">Keterlibatan Klien</h4>
                            <p class="text-gray-500 text-[9px]">Konversi Deal Flow Aktual</p>
                        </div>
                        <div class="bg-gradient-to-r from-[#ff4000] to-[#b32d00] px-2 py-1 rounded text-white text-[10px] font-bold shadow-lg flex items-center gap-0.5">
                            +18.4%
                            <svg class="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                        </div>
                    </div>
                    
                    <div class="flex-1 flex flex-col justify-end z-10 mt-4 relative">
                        <!-- Chart Grid Lines -->
                        <div class="absolute inset-x-0 bottom-0 border-b border-white/10 border-dashed"></div>
                        <div class="absolute inset-x-0 bottom-1/3 border-b border-white/5 border-dashed"></div>
                        <div class="absolute inset-x-0 bottom-2/3 border-b border-white/5 border-dashed"></div>
                        <div class="absolute inset-x-0 top-0 border-b border-white/5 border-dashed"></div>
                        
                        <!-- Animated Bars Area -->
                        <div class="w-full h-full flex items-end justify-between gap-1 sm:gap-1.5 pt-4 pb-[1px] client-bars relative z-10">
                            <!-- JS Will Inject Animated Bars Here -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center text-center gap-2">
              <h3 class="text-white text-2xl">Pemberdayaan Klien</h3>
              <p class="text-white/70 text-base leading-relaxed">Berdedikasi untuk membantu perusahaan mencapai target kesepakatan melalui berbagai macam solusi teknologi efisien.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- ========== CASE STUDIES ========== -->
<section class="w-full py-12 lg:py-16 px-4" style="background:#050505;">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col items-center gap-16">
      <div class="flex flex-col items-center gap-6 text-center scroll-reveal">
        <span class="text-white text-base">Studi Kasus</span>
        <h2 class="text-white text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight max-w-4xl">Lihat Bagaimana Otomatisasi AI Mengubah Bisnis</h2>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
        <div class="flex-1 max-w-2xl scroll-reveal delay-100">
          <div class="relative w-full aspect-video lg:h-[577px] lg:aspect-auto flex items-center justify-center overflow-visible">
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-tr from-[#ff3300]/20 to-transparent blur-[100px] rounded-full z-0 w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            <!-- Widget Frame -->
            <div class="w-full max-w-[500px] bg-[#1a1a1a] p-3 sm:p-5 rounded-[2.5rem] shadow-2xl relative z-10 border border-white/5" style="box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(255, 51, 0, 0.15);">
                <!-- Widget Inner -->
                <div class="bg-[#111111] w-full rounded-[2rem] p-5 sm:p-7 flex flex-col border border-white/5 relative overflow-hidden">
                    <!-- Header -->
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h3 class="text-white text-xl sm:text-2xl font-normal tracking-tight mb-1">Metrik</h3>
                            <p class="text-gray-400 text-[10px] sm:text-xs">Pertumbuhan Pendapatan 2.8% dari tahun lalu</p>
                        </div>
                        <div class="w-10 h-10 rounded-full bg-[#181818] border border-white/5 flex items-center justify-center">
                            <!-- Wallet icon -->
                            <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                        </div>
                    </div>

                    <!-- Tabs -->
                    <div class="flex gap-4 sm:gap-6 text-[10px] sm:text-xs font-medium mb-6">
                        <span class="text-gray-500 cursor-pointer hover:text-white transition-colors">Harian</span>
                        <span class="text-gray-500 cursor-pointer hover:text-white transition-colors">Bulanan</span>
                        <span class="text-[#ff4000] cursor-pointer flex items-center gap-1">Tahunan <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg></span>
                    </div>

                    <!-- Chart -->
                    <div class="relative w-full h-[150px] sm:h-[180px] -mx-2">
                        <svg viewBox="0 0 400 150" class="w-full h-full preserve-3d" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="#ff4000" stop-opacity="0.4"/>
                                    <stop offset="100%" stop-color="#ff4000" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                            <path id="metricsChartArea" style="transition: d 2s ease-in-out;" d="M0,150 L0,130 L50,120 L100,100 L150,95 L200,75 L250,60 L300,45 L350,30 L400,10 L400,150 Z" fill="url(#areaGlow)"/>
                            <path id="metricsChartLine" style="transition: d 2s ease-in-out;" d="M0,130 L50,120 L100,100 L150,95 L200,75 L250,60 L300,45 L350,30 L400,10" fill="none" stroke="#ff4000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <!-- Dot indicator -->
                        <div id="metricsDot" class="absolute w-3 h-3 bg-white border-[3px] border-[#ff4000] rounded-full shadow-[0_0_10px_#ff4000] z-10 transition-all duration-[2000ms] ease-in-out" style="left: 75%; top: 30%; transform: translate(-50%, -50%);"></div>
                    </div>

                    <!-- Footer Stats -->
                    <div class="flex justify-between items-end mt-4">
                        <div class="flex flex-col gap-1">
                            <p class="text-gray-400 text-[10px] sm:text-xs">Total pendapatan (Rp <span class="metric-rp">75.340.000</span>)</p>
                            <p class="text-white text-xl sm:text-2xl font-semibold"><span class="metric-btc">0.00689</span> <span class="text-gray-300 font-normal">BTC</span></p>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-gray-300 text-xs sm:text-sm font-medium">+9.8%</span>
                            <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#181818] border border-white/10 flex items-center justify-center">
                                <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 19L19 5M19 5v10M19 5H9"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="flex-1 max-w-2xl scroll-reveal delay-200">
          <div class="flex flex-col gap-12 lg:gap-20">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-5">
                <blockquote id="csQuote" class="text-white text-2xl lg:text-3xl font-normal leading-tight"></blockquote>
                <p id="csDesc" class="text-white/70 text-base leading-relaxed"></p>
              </div>
              <div class="flex gap-2">
                <button id="csPrev" class="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button id="csNext" class="p-3 bg-white hover:bg-white/90 rounded-xl transition-colors">
                  <svg class="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>
            <div id="csStats" class="flex flex-col gap-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== TESTIMONIALS ========== -->
<section class="w-full py-12 lg:py-8 px-4" style="background:#050505;">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16 scroll-reveal">
      <div class="inline-flex items-center gap-3 p-4 bg-black/10 border border-white/10 rounded-2xl backdrop-blur-md mb-8">
        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        <span class="text-white/70 text-sm">Kisah Pelanggan</span>
      </div>
      <h2 class="text-white text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight mb-6">Dipercaya oleh para pemimpin industri</h2>
      <p class="text-white/70 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">Lihat bagaimana perusahaan di seluruh dunia mengubah operasi mereka dengan platform berbasis AI kami.</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="relative overflow-hidden rounded-[30px] border border-white/20 shadow-lg backdrop-blur-sm scroll-reveal delay-100" style="background:rgba(11,11,12,0.77);">
        <div class="p-8 flex flex-col h-full">
          <div class="flex items-center gap-1 mb-6">
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
          </div>
          <blockquote class="text-white text-base lg:text-lg leading-relaxed mb-8 flex-grow">"Platform ini telah merevolusi cara kami berinovasi. Wawasan berbasis AI membantu kami mengambil keputusan lebih cepat dan akurat."</blockquote>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-full h-full object-cover"/>
            </div>
            <div>
              <h4 class="text-white text-base">Sarah Johnson</h4>
              <p class="text-white/70 text-sm">CEO, TechFlow Inc.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-[30px] border border-white/20 shadow-lg backdrop-blur-sm scroll-reveal delay-200" style="background:rgba(11,11,12,0.77);">
        <div class="p-8 flex flex-col h-full">
          <div class="flex items-center gap-1 mb-6">
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
          </div>
          <blockquote class="text-white text-base lg:text-lg leading-relaxed mb-8 flex-grow">"Kemampuan otomatisasi menghemat waktu berharga kami. Tim kini dapat fokus pada inisiatif strategis daripada tugas yang berulang."</blockquote>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-full h-full object-cover"/>
            </div>
            <div>
              <h4 class="text-white text-base">Michael Chen</h4>
              <p class="text-white/70 text-sm">CTO, DataVise</p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-[30px] border border-white/20 shadow-lg backdrop-blur-sm scroll-reveal delay-300" style="background:rgba(11,11,12,0.77);">
        <div class="p-8 flex flex-col h-full">
          <div class="flex items-center gap-1 mb-6">
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            <svg class="w-5 h-5" fill="#fff" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
          </div>
          <blockquote class="text-white text-base lg:text-lg leading-relaxed mb-8 flex-grow">"Implementasinya mulus dan hasilnya langsung terlihat. Produktivitas kami meningkat tajam hingga 40% hanya di bulan pertama."</blockquote>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" class="w-full h-full object-cover"/>
            </div>
            <div>
              <h4 class="text-white text-base">Emily Rodriguez</h4>
              <p class="text-white/70 text-sm">Product Manager, InnovateLab</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== PRICING ========== -->
<section id="pricing" class="w-full py-20 px-4" style="background:#050505;">
  <div class="max-w-7xl mx-auto flex flex-col items-center">
    <div class="scroll-reveal w-full flex flex-col items-center">
      <h2 class="text-white text-4xl lg:text-5xl font-medium leading-tight mb-4 text-center">Temukan Paket yang Tepat Untuk Anda</h2>
      <p class="text-gray-400 text-base lg:text-lg text-center max-w-2xl mb-10">Jelajahi paket fleksibel kami, dirancang untuk mendukung setiap langkah pertumbuhan media sosial Anda.</p>

      <!-- Toggle Switch -->
      <div class="inline-flex items-center bg-[#0a0a0a] p-1.5 rounded-full border border-white/5 mb-16 shadow-lg">
        <button class="px-6 py-2.5 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-colors">Tagihan Bulanan</button>
        <button class="px-6 py-2.5 rounded-full text-sm font-medium text-white bg-[#1a1a1a] transition-colors flex items-center shadow-sm border border-white/5">
          Tagihan Tahunan
          <span class="ml-2 bg-[#ff4000] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">-20%</span>
        </button>
      </div>
    </div>

    <!-- Pricing Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
      
      <!-- Starter Plan -->
      <div class="bg-[#0f0f0f] border border-white/5 rounded-[2rem] p-8 sm:p-10 flex flex-col scroll-reveal delay-100">
        <h3 class="text-white text-[22px] font-normal mb-3">Paket Pemula</h3>
        <p class="text-gray-400 text-sm mb-8 leading-relaxed">Disesuaikan untuk inovator dan startup yang siap merampingkan keuangan mereka.</p>
        <div class="text-white text-5xl font-normal mb-8">Gratis</div>
        <button class="w-full py-4 rounded-full bg-[#1c1c1c] text-white hover:bg-[#252525] transition-colors font-medium text-sm border border-white/5 mb-10">Mulai Proyek</button>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Solusi Faktur Sederhana
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Dashboard Komprehensif
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Manajemen Pengeluaran
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Bantuan Email 24/7
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Fitur Pelaporan Dasar
          </div>
        </div>
      </div>

      <!-- Basic Plan (Highlighted) -->
      <div class="bg-[#0f0f0f] border border-[#ff4000]/20 rounded-[2rem] p-8 sm:p-10 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(255,64,0,0.12)] scroll-reveal delay-200">
        <!-- Orange Glow inside -->
        <div class="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#ff4000]/30 to-transparent z-0 pointer-events-none"></div>
        
        <div class="relative z-10">
          <h3 class="text-white text-[22px] font-normal mb-3">Paket Dasar</h3>
          <p class="text-gray-300 text-sm mb-8 leading-relaxed">Dirancang untuk tim yang sedang berkembang, dengan alat untuk tetap lincah.</p>
          <div class="flex items-end mb-8 gap-1">
            <div class="text-white text-5xl font-normal">Rp 1,8 Jt</div>
            <div class="text-gray-400 text-sm mb-1.5">/Bulan</div>
          </div>
          <button class="w-full py-4 rounded-full text-white hover:scale-[1.02] active:scale-[0.98] transition-all font-medium text-sm mb-10 border border-white/10" style="background: linear-gradient(90deg, #3a1000 0%, #ff4000 100%);">Mulai Proyek</button>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3 text-sm text-gray-200">
              <div class="w-4 h-4 rounded-full bg-[#ff4000] flex items-center justify-center shrink-0">
                <svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              Semua Fitur Tanpa Biaya
            </div>
            <div class="flex items-center gap-3 text-sm text-gray-200">
              <div class="w-4 h-4 rounded-full bg-[#ff4000] flex items-center justify-center shrink-0">
                <svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              Opsi Dashboard Tanpa Batas
            </div>
            <div class="flex items-center gap-3 text-sm text-gray-200">
              <div class="w-4 h-4 rounded-full bg-[#ff4000] flex items-center justify-center shrink-0">
                <svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              Kolaborasi Mulus dengan Tim
            </div>
            <div class="flex items-center gap-3 text-sm text-gray-200">
              <div class="w-4 h-4 rounded-full bg-[#ff4000] flex items-center justify-center shrink-0">
                <svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              Alat Pelaporan Mendalam
            </div>
            <div class="flex items-center gap-3 text-sm text-gray-200">
              <div class="w-4 h-4 rounded-full bg-[#ff4000] flex items-center justify-center shrink-0">
                <svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              Bantuan Email Dipercepat
            </div>
          </div>
        </div>
      </div>

      <!-- Launch Plan -->
      <div class="bg-[#0f0f0f] border border-white/5 rounded-[2rem] p-8 sm:p-10 flex flex-col scroll-reveal delay-300">
        <h3 class="text-white text-[22px] font-normal mb-3">Paket Peluncuran</h3>
        <p class="text-gray-400 text-sm mb-8 leading-relaxed">Dibuat khusus untuk memenuhi kebutuhan perusahaan dan tim besar.</p>
        <div class="flex items-end mb-8 gap-1">
          <div class="text-white text-5xl font-normal">Rp 6,7 Jt</div>
          <div class="text-gray-400 text-sm mb-1.5">/Bulan</div>
        </div>
        <button class="w-full py-4 rounded-full bg-[#1c1c1c] text-white hover:bg-[#252525] transition-colors font-medium text-sm border border-white/5 mb-10">Mulai Proyek</button>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Harga Terpersonalisasi
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Semua Fitur Paket Dasar
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Manajer Akun Khusus
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Akses API & Integrasi
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-300">
            <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Keamanan & Kepatuhan Khusus
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ========== FAQ ========== -->
<section id="faq" class="w-full py-20 px-4" style="background:#050505;">
  <div class="max-w-4xl mx-auto flex flex-col items-center">
    <div class="scroll-reveal w-full flex flex-col items-center">
      <h2 class="text-white text-4xl lg:text-5xl font-medium leading-tight mb-4 text-center">Pertanyaan yang Sering Diajukan</h2>
      <p class="text-gray-400 text-base lg:text-lg text-center max-w-2xl mb-12">Dengar bagaimana klien kami merevolusi alur kerja mereka bersama kami.</p>
    </div>

    <div class="w-full flex flex-col gap-3 sm:gap-4">
      
      <!-- FAQ 01 -->
      <div class="faq-item scroll-reveal relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#0c0c0c] hover:bg-[#111] transition-all duration-300 cursor-pointer">
        <div class="faq-glow absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#ff4000]/30 via-[#ff4000]/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
        <div class="relative z-10 p-5 sm:px-8 sm:py-6 flex flex-col">
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center gap-4 sm:gap-6">
              <span class="text-gray-300 font-medium text-sm sm:text-base">01</span>
              <span class="text-white text-sm sm:text-base font-medium">Seberapa amankah data keuangan saya?</span>
            </div>
            <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div class="faq-answer">
            <div>
              <p class="text-gray-300 text-sm sm:text-base pt-4 pl-10 sm:pl-12 leading-relaxed">
                Keamanan adalah prioritas utama kami. Kami menggunakan enkripsi kelas militer dan mematuhi standar kepatuhan internasional terketat untuk memastikan data keuangan Anda selalu aman.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ 02 -->
      <div class="faq-item scroll-reveal relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#0c0c0c] hover:bg-[#111] transition-all duration-300 cursor-pointer">
        <div class="faq-glow absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#ff4000]/30 via-[#ff4000]/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
        <div class="relative z-10 p-5 sm:px-8 sm:py-6 flex flex-col">
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center gap-4 sm:gap-6">
              <span class="text-gray-300 font-medium text-sm sm:text-base">02</span>
              <span class="text-white text-sm sm:text-base font-medium">Metode pembayaran apa saja yang didukung?</span>
            </div>
            <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div class="faq-answer">
            <div>
              <p class="text-gray-300 text-sm sm:text-base pt-4 pl-10 sm:pl-12 leading-relaxed">
                Kami mendukung berbagai metode pembayaran termasuk kartu kredit utama (Visa, Mastercard), transfer bank lokal, dan e-wallet populer untuk kemudahan transaksi Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ 03 (Active by Default) -->
      <div class="faq-item active scroll-reveal relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#0c0c0c] hover:bg-[#111] transition-all duration-300 cursor-pointer">
        <div class="faq-glow absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#ff4000]/40 via-[#ff4000]/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
        <div class="relative z-10 p-5 sm:px-8 sm:py-6 flex flex-col">
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center gap-4 sm:gap-6">
              <span class="text-gray-300 font-medium text-sm sm:text-base">03</span>
              <span class="text-white text-sm sm:text-base font-medium">Apakah platform ini cocok untuk startup dan perusahaan besar?</span>
            </div>
            <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div class="faq-answer">
            <div>
              <p class="text-gray-300 text-sm sm:text-base pt-4 pl-10 sm:pl-12 leading-relaxed">
                Tentu saja! Kami menawarkan berbagai macam paket fleksibel yang dirancang untuk memenuhi kebutuhan semua orang — mulai dari individu dan pekerja lepas yang ingin menyederhanakan keuangan pribadi mereka, hingga tim yang sedang berkembang yang membutuhkan kekuatan lebih dan alat kolaborasi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ 04 -->
      <div class="faq-item scroll-reveal relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#0c0c0c] hover:bg-[#111] transition-all duration-300 cursor-pointer">
        <div class="faq-glow absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#ff4000]/30 via-[#ff4000]/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
        <div class="relative z-10 p-5 sm:px-8 sm:py-6 flex flex-col">
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center gap-4 sm:gap-6">
              <span class="text-gray-300 font-medium text-sm sm:text-base">04</span>
              <span class="text-white text-sm sm:text-base font-medium">Bisakah saya meningkatkan atau mengubah paket saya nanti?</span>
            </div>
            <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div class="faq-answer">
            <div>
              <p class="text-gray-300 text-sm sm:text-base pt-4 pl-10 sm:pl-12 leading-relaxed">
                Sangat bisa. Anda dapat mengubah paket, meningkatkan, atau menurunkannya kapan saja langsung dari pengaturan akun Anda tanpa ada biaya tersembunyi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ 05 -->
      <div class="faq-item scroll-reveal relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#0c0c0c] hover:bg-[#111] transition-all duration-300 cursor-pointer">
        <div class="faq-glow absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#ff4000]/30 via-[#ff4000]/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
        <div class="relative z-10 p-5 sm:px-8 sm:py-6 flex flex-col">
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center gap-4 sm:gap-6">
              <span class="text-gray-300 font-medium text-sm sm:text-base">05</span>
              <span class="text-white text-sm sm:text-base font-medium">Apakah platform ini terintegrasi dengan alat lain?</span>
            </div>
            <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div class="faq-answer">
            <div>
              <p class="text-gray-300 text-sm sm:text-base pt-4 pl-10 sm:pl-12 leading-relaxed">
                Ya, platform kami telah terintegrasi dengan lebih dari 50+ aplikasi populer seperti Slack, Google Workspace, CRM utama, serta API kustom untuk kebutuhan perusahaan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ 06 -->
      <div class="faq-item scroll-reveal relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#0c0c0c] hover:bg-[#111] transition-all duration-300 cursor-pointer">
        <div class="faq-glow absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#ff4000]/30 via-[#ff4000]/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
        <div class="relative z-10 p-5 sm:px-8 sm:py-6 flex flex-col">
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center gap-4 sm:gap-6">
              <span class="text-gray-300 font-medium text-sm sm:text-base">06</span>
              <span class="text-white text-sm sm:text-base font-medium">Bisakah saya mengakses platform ini di perangkat seluler?</span>
            </div>
            <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div class="faq-answer">
            <div>
              <p class="text-gray-300 text-sm sm:text-base pt-4 pl-10 sm:pl-12 leading-relaxed">
                Aplikasi kami sepenuhnya responsif dan dapat diakses dari browser seluler. Kami juga memiliki aplikasi khusus iOS dan Android untuk pengalaman yang lebih optimal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ 07 -->
      <div class="faq-item scroll-reveal relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#0c0c0c] hover:bg-[#111] transition-all duration-300 cursor-pointer">
        <div class="faq-glow absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#ff4000]/30 via-[#ff4000]/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
        <div class="relative z-10 p-5 sm:px-8 sm:py-6 flex flex-col">
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center gap-4 sm:gap-6">
              <span class="text-gray-300 font-medium text-sm sm:text-base">07</span>
              <span class="text-white text-sm sm:text-base font-medium">Apakah Anda menawarkan dukungan pelanggan jika saya butuh bantuan?</span>
            </div>
            <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div class="faq-answer">
            <div>
              <p class="text-gray-300 text-sm sm:text-base pt-4 pl-10 sm:pl-12 leading-relaxed">
                Tentu! Kami menyediakan dukungan pelanggan 24/7 melalui obrolan langsung (live chat), email, dan panggilan telepon khusus untuk pelanggan paket Peluncuran.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ========== CTA ========== -->
<section class="w-full py-16 px-4 sm:px-6 lg:px-8 mt-10 mb-10 scroll-reveal">
  <div class="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto">
    <div class="relative w-full overflow-hidden rounded-3xl min-h-[400px] sm:min-h-[500px] flex items-center justify-center"
      style="background-image:url('https://id-preview--d0ba0fc5-368a-4d18-96b8-a1621b38be6b.lovable.app/lovable-uploads/f205f4a0-427d-4991-8617-497b883351fe.png'); background-size:cover; background-position:center;">
      <div class="flex flex-col items-center justify-center gap-10 px-8 py-16 max-w-3xl mx-auto text-center relative z-10">
        <div class="space-y-5">
          <h2 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">Langkah selanjutnya untuk kesuksesan Anda</h2>
          <p class="text-white/70 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">Banyak platform Web3 yang rumit dan memiliki kurva belajar curam, membuat pengguna baru ragu untuk masuk.</p>
        </div>
        <button class="btn btn-default">Mulai Secara Gratis</button>
      </div>
    </div>
  </div>
</section>

<!-- ========== FOOTER ========== -->
<footer class="footer-bg md:rounded-t-[3rem] relative w-full flex flex-col items-center rounded-t-[2rem] pt-12 lg:pt-16 overflow-hidden">
  <div class="bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur"></div>
  
  <div class="w-full max-w-7xl mx-auto px-6 grid gap-8 xl:grid-cols-3 xl:gap-8 relative z-10">
    <div class="scroll-reveal space-y-4">
      <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      <p class="text-white/70 mt-8 text-base md:mt-0 leading-relaxed">Memberdayakan bisnis melalui teknologi kecerdasan buatan terdepan untuk masa depan yang lebih efisien.</p>
    </div>
    <div class="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
      <div class="scroll-reveal delay-100">
        <h3 class="text-white text-base">Produk</h3>
        <ul class="text-white/70 mt-4 space-y-2 text-base leading-relaxed">
          <li><a href="#features" class="hover:text-white transition-all">Fitur</a></li>
          <li><a href="#pricing" class="hover:text-white transition-all">Harga</a></li>
          <li><a href="#testimonials" class="hover:text-white transition-all">Testimoni</a></li>
          <li><a href="#" class="hover:text-white transition-all">Integrasi</a></li>
        </ul>
      </div>
      <div class="scroll-reveal delay-200">
        <h3 class="text-white text-base">Perusahaan</h3>
        <ul class="text-white/70 mt-4 space-y-2 text-base leading-relaxed">
          <li><a href="#faqs" class="hover:text-white transition-all">FAQ</a></li>
          <li><a href="#about" class="hover:text-white transition-all">Tentang Kami</a></li>
          <li><a href="#privacy" class="hover:text-white transition-all">Kebijakan Privasi</a></li>
          <li><a href="#terms" class="hover:text-white transition-all">Ketentuan Layanan</a></li>
        </ul>
      </div>
      <div class="scroll-reveal delay-300">
        <h3 class="text-white text-base">Sumber Daya</h3>
        <ul class="text-white/70 mt-4 space-y-2 text-base leading-relaxed">
          <li><a href="#blog" class="hover:text-white transition-all">Blog</a></li>
          <li><a href="#changelog" class="hover:text-white transition-all">Log Pembaruan</a></li>
          <li><a href="#brand" class="hover:text-white transition-all">Merek</a></li>
          <li><a href="#help" class="hover:text-white transition-all">Bantuan</a></li>
        </ul>
      </div>
      <div class="scroll-reveal delay-400">
        <h3 class="text-white text-base">Sosial Media</h3>
        <ul class="text-white/70 mt-4 space-y-2 text-base leading-relaxed">
          <li><a href="#" class="inline-flex items-center hover:text-white transition-all"><svg class="me-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>Facebook</a></li>
          <li><a href="#" class="inline-flex items-center hover:text-white transition-all"><svg class="me-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>Instagram</a></li>
          <li><a href="#" class="inline-flex items-center hover:text-white transition-all"><svg class="me-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12s0-5-1-7c-.5-1-1.5-2-3-2-3-1-9-1-9-1s-6 0-9 1c-1.5 0-2.5 1-3 2-1 2-1 7-1 7s0 5 1 7c.5 1 1.5 2 3 2 3 1 9 1 9 1s6 0 9-1c1.5 0 2.5-1 3-2 1-2 1-7 1-7z"/><polygon points="10 15 15 12 10 9" fill="currentColor"/></svg>Youtube</a></li>
          <li><a href="#" class="inline-flex items-center hover:text-white transition-all"><svg class="me-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Big Brand Name (Growth) -->
  <div class="w-full mt-20 sm:mt-28 relative flex flex-col items-center justify-end border-t border-white/5 pt-16 scroll-reveal">
    
    <!-- Copyright & Links (Sesuai Gambar) -->
    <div class="relative z-20 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white/50 text-xs sm:text-sm mb-10 sm:mb-16 font-medium tracking-wide w-full px-4">
      <span>© <span id="footerYear">2024</span> Growth. Semua hak dilindungi.</span>
      <span class="hidden sm:inline opacity-50">|</span>
      <a href="#" class="hidden sm:inline hover:text-white transition-colors">Kebijakan Privasi</a>
      <span class="hidden sm:inline opacity-50">|</span>
      <a href="#" class="hidden sm:inline hover:text-white transition-colors">Syarat & Ketentuan</a>
    </div>

    <!-- Gradasi Merah Clean & Rata di Bawah -->
    <div class="absolute bottom-0 left-0 w-full h-[60%] sm:h-[70%] bg-gradient-to-t from-[#990000] via-[#ff0000]/20 to-transparent pointer-events-none z-0"></div>
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] sm:w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ff0000] via-[#ff0000]/50 to-transparent opacity-90 blur-[40px] pointer-events-none z-0"></div>

    <!-- Teks Growth -->
    <h1 class="relative z-10 w-full text-white font-bold tracking-tighter text-[22vw] sm:text-[24vw] lg:text-[25vw] leading-none select-none text-center whitespace-nowrap pb-2 sm:pb-4" style="text-shadow: 0 10px 40px rgba(0,0,0,0.4);">
      Growth
    </h1>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>
  // Setup Intersection Observer for Scroll Animations
  (function() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Jika ingin elemen hanya muncul sekali (tidak menghilang saat di-scroll ke atas):
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger saat 10% elemen masuk ke layar
      rootMargin: "0px 0px -50px 0px" // Sedikit margin bawah agar animasi terasa mulus
    });

    // Menerapkan observer pada semua elemen yang memiliki kelas 'scroll-reveal'
    document.querySelectorAll('.scroll-reveal').forEach(function(el) {
      observer.observe(el);
    });
  })();

  // HLS.js implementation for Hero Video
  (function(){
    var video = document.getElementById('heroVideo');
    var videoSrc = 'https://stream.mux.com/3gErUdcrPfibrZ00ysHSLAupEL01PeX4PpAwgcGpGvbAM.m3u8';
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native support for Safari
      video.src = videoSrc;
    }
  })();

  // Mobile menu toggle
  (function(){var b=document.getElementById('mobileToggle'),m=document.getElementById('mobileMenu'),a=document.getElementById('iconMenu'),c=document.getElementById('iconClose');b.addEventListener('click',function(){m.classList.toggle('hidden');a.classList.toggle('hidden');c.classList.toggle('hidden');});})();

  // Footer year
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  // Hero BlurText (per-word stagger, delay 100ms, 2 baris di desktop)
  (function(){
    var line1 = "Platform Untuk Inovasi".split(' ');
    var line2 = "Tingkat Lanjut".split(' ');
    var html = '';
    var counter = 0;
    
    // Baris pertama (dibungkus container penuh agar tidak menyatu dengan baris 2)
    html += '<div class="w-full flex flex-wrap justify-center">';
    line1.forEach(function(w){
      html += '<span style="animation-delay:'+(counter*100)+'ms;">'+w+'&nbsp;</span>';
      counter++;
    });
    html += '</div>';
    
    // Baris kedua (dibungkus container penuh)
    html += '<div class="w-full flex flex-wrap justify-center">';
    line2.forEach(function(w){
      html += '<span style="animation-delay:'+(counter*100)+'ms;">'+w+'&nbsp;</span>';
      counter++;
    });
    html += '</div>';
    
    document.getElementById('heroTitle').innerHTML = html;
  })();

  // Hero Particles canvas
  (function(){
    var canvas=document.getElementById('particles'); if(!canvas) return;
    var ctx=canvas.getContext('2d'), particles=[];
    function resize(){ canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; }
    function create(){
      particles=[];
      for(var i=0;i<60;i++){
        particles.push({
          x:Math.random()*canvas.width, y:Math.random()*canvas.height,
          size:Math.random()*2+1, opacity:Math.random()*0.5+0.2,
          speedY:Math.random()*0.3+0.1, speedX:(Math.random()-0.5)*0.2
        });
      }
    }
    function animate(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(function(p){
        p.y-=p.speedY; p.x+=p.speedX;
        if(p.y<-10){ p.y=canvas.height+10; p.x=Math.random()*canvas.width; }
        if(p.x<-10) p.x=canvas.width+10;
        if(p.x>canvas.width+10) p.x=-10;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle='rgba(255,255,255,'+p.opacity+')'; ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    resize(); create(); animate();
    window.addEventListener('resize',function(){resize();create();});
  })();

  // Case Studies carousel
  (function(){
    var slides=[
      {q:"Peramalan AI kurangi limbah inventaris hingga 40% untuk TrailForge",d:"Tim penjualan ScaleByte kesulitan menanggapi prospek. Asisten penjualan AI kami secara otomatis menyusun jangkauan, merespon otomatis, dan memperbarui CRM—menghasilkan transaksi yang lebih cepat.",s:[['target','3x Lipat Transaksi'],['zap','Respons 40% Cepat'],['trend','95% Akurasi Prospek'],['db','CRM Sinkron Penuh']]},
      {q:"Efisiensi dukungan pelanggan meningkat 60% berkat respons AI otomatis",d:"Tim dukungan TechFlow kewalahan dengan banyaknya tiket masuk. Chatbot AI kami menangani 80% pertanyaan, membuat agen bisa leluasa fokus pada masalah yang rumit.",s:[['users','80% Selesai Otomatis'],['clock','Dukungan 60% Cepat'],['shield','99% Waktu Aktif'],['check','95% Tingkat Kepuasan']]},
      {q:"ROI pemasaran sukses meningkat 250% melalui optimasi kampanye cerdas",d:"GrowthCorp sempat kesulitan dengan efisiensi pengeluaran iklan. Asisten pemasaran AI mengoptimalkan kampanye real-time, menargetkan para audiens yang tepat untuk konversi yang maksimal.",s:[['trend','Peningkatan ROI 250%'],['target','Target 85% Tepat'],['zap','Optimasi Waktu Nyata'],['db','Atribusi Sepenuhnya Tepat']]}
    ];
    var icons={
      target:'<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
      zap:'<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      trend:'<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
      db:'<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
      users:'<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      clock:'<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      shield:'<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      check:'<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>'
    };
    var i=0,Q=document.getElementById('csQuote'),D=document.getElementById('csDesc'),S=document.getElementById('csStats');
    function render(){
      var s=slides[i]; Q.textContent='"'+s.q+'"'; D.textContent=s.d;
      S.innerHTML=s.s.map(function(x){return '<div class="flex items-center gap-6"><div class="w-6 h-6 shrink-0">'+icons[x[0]]+'</div><span class="text-white/70 text-base leading-relaxed">'+x[1]+'</span></div>';}).join('');
    }
    document.getElementById('csPrev').addEventListener('click',function(){i=(i-1+slides.length)%slides.length;render();});
    document.getElementById('csNext').addEventListener('click',function(){i=(i+1)%slides.length;render();});
    render();
  })();

  // Running Numbers Logic for the Crypto & Audience Widgets
  (function(){
    setInterval(function() {
      // Update BTC values
      var btcElements = document.querySelectorAll('.btc-val');
      btcElements.forEach(function(el) {
        var randomStr = Math.floor(10 + Math.random() * 89).toString();
        el.textContent = "0.0736" + randomStr;
      });
      
      // Update ETH values
      var ethElements = document.querySelectorAll('.eth-val');
      ethElements.forEach(function(el) {
        var randomStr = Math.floor(100 + Math.random() * 899).toString();
        el.textContent = "0.0865" + randomStr;
      });

      // Update Audience Chart (Gauge)
      var newAudiencePercent = (65 + Math.random() * 25).toFixed(1); // Random around 65.0 to 90.0
      // 20 is the start X pos, 160 is the total track width
      var clipWidth = 20 + (newAudiencePercent / 100) * 160; 

      document.querySelectorAll('.gauge-val').forEach(function(el) {
          el.textContent = newAudiencePercent + '%';
      });
      document.querySelectorAll('.gauge-clip-rect').forEach(function(el) {
          el.setAttribute('width', clipWidth);
      });

      // Update Facebook Audience
      var newFb = Math.floor(3000 + Math.random() * 800);
      document.querySelectorAll('.fb-val').forEach(function(el) {
          el.textContent = newFb.toLocaleString();
      });

      // Update Instagram Audience
      var newIg = (40 + Math.random() * 2).toFixed(1);
      document.querySelectorAll('.ig-val').forEach(function(el) {
          el.textContent = newIg + 'k';
      });

    }, 1500); // Updates every 1.5 seconds
  })();

  // Running Animation Logic for Cash Flow Widget
  (function(){
    setInterval(function() {
        // Randomize Bar Heights for inactive bars
        var bars = document.querySelectorAll('.cf-bar:not(.cf-active)');
        bars.forEach(function(bar) {
            var randomHeight = Math.floor(15 + Math.random() * 45); // Random between 15% to 60%
            bar.style.height = randomHeight + '%';
        });

        // Randomize Active Bar Height & Match Tooltip Position
        var activeBars = document.querySelectorAll('.cf-active');
        activeBars.forEach(function(bar) {
            var randomHeight = Math.floor(65 + Math.random() * 25); // Random between 65% to 90%
            bar.style.height = randomHeight + '%';
            
            // Sync tooltip vertical position to float above the active bar safely
            var tooltips = document.querySelectorAll('.cf-tooltip');
            tooltips.forEach(function(tt) {
                tt.style.bottom = (randomHeight + 5) + '%';
            });
        });

        // Generate Random Rupiah Values
        var totalCash = 540323450 + (Math.random() * 20000000 - 10000000);
        var val1 = 34845000 + (Math.random() * 5000000 - 2500000);
        var val2 = 8456000 + (Math.random() * 2000000 - 1000000);

        // Rupiah Formatter function
        var formatRupiah = function(angka) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(angka);
        };

        // Apply Rupiah strings to the UI Elements
        document.querySelectorAll('.cf-total').forEach(function(el) { el.textContent = formatRupiah(totalCash); });
        document.querySelectorAll('.cf-tt-val1').forEach(function(el) { el.textContent = formatRupiah(val1); });
        document.querySelectorAll('.cf-tt-val2').forEach(function(el) { el.textContent = "-" + formatRupiah(val2); });

    }, 2500); // 2.5 seconds loop for the cash flow chart for smooth transition
  })();

  // Initialize Client Engagement Wave Bars
  (function(){
    var container = document.querySelector('.client-bars');
    if(container) {
      for(var j=0; j<16; j++) {
        var barContainer = document.createElement('div');
        barContainer.className = 'w-full h-full flex flex-col justify-end items-center relative group';
        
        var bar = document.createElement('div');
        bar.className = 'w-full bg-gradient-to-t from-white/10 to-white/30 rounded-t-sm transition-all duration-700 ease-in-out relative c-bar hover:from-[#ff4000]/80 hover:to-[#ff4000] cursor-pointer';
        bar.style.height = (20 + Math.random() * 60) + '%';
        
        // Add a glowing top dot that appears on hover
        var dot = document.createElement('div');
        dot.className = 'absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#ff4000]';
        bar.appendChild(dot);
        
        barContainer.appendChild(bar);
        container.appendChild(barContainer);
      }
    }
  })();

  // Multi-Widget 1.5s Interval (Wallet, AI & Client Widgets)
  (function(){
    setInterval(function() {
        // Wallet Widget Animations
        var curUsd = (24678 + Math.random() * 10 - 5).toFixed(2);
        document.querySelectorAll('.w-usd').forEach(function(el) { el.textContent = '$' + curUsd; });
        
        var curEur = (28345 + Math.random() * 10 - 5).toFixed(2);
        document.querySelectorAll('.w-eur').forEach(function(el) { el.textContent = '€' + curEur; });

        var curAud = (20517 + Math.random() * 10 - 5).toFixed(2);
        document.querySelectorAll('.w-aud').forEach(function(el) { el.textContent = '$' + curAud; });

        // AI Innovation Widget Animations
        document.querySelectorAll('.ai-bar').forEach(function(el) {
           el.style.height = (30 + Math.random() * 70) + '%'; 
        });
        var aiStatus = Math.random() > 0.8 ? "Memproses..." : "Optimal";
        document.querySelectorAll('.ai-status').forEach(function(el) { el.textContent = aiStatus; });

        // Client Engagement Widget Animations
        document.querySelectorAll('.c-bar').forEach(function(el) {
           var h = parseInt(el.style.height);
           // Randomly drift up or down
           var newH = Math.max(15, Math.min(95, h + (Math.random() * 40 - 20)));
           el.style.height = newH + '%';
        });
    }, 1500);
  })();

  // Metrics Chart Animation (Case Studies)
  (function(){
    setInterval(function() {
        // Dynamic values for BTC
        var randBtc = (0.00600 + Math.random() * 0.00200).toFixed(5);
        var btcEl = document.querySelector('.metric-btc');
        if(btcEl) btcEl.textContent = randBtc;

        // Dynamic values for Rp
        var randRp = 75000000 + Math.random() * 5000000;
        var rpEl = document.querySelector('.metric-rp');
        if(rpEl) rpEl.textContent = new Intl.NumberFormat('id-ID').format(Math.floor(randRp));

        // Animate Chart Path
        var pts = [0, 50, 100, 150, 200, 250, 300, 350, 400];
        var baseYs = [130, 120, 100, 95, 75, 60, 45, 30, 10]; // Trend upwards
        
        var newYs = baseYs.map(function(y, i) {
            if (i === 0 || i === pts.length - 1) return y; // Anchor ends
            return Math.max(5, y + (Math.random() * 30 - 15)); // Random fluctuation
        });

        var linePath = "M0," + newYs[0];
        for(var j=1; j<pts.length; j++){
           linePath += " L" + pts[j] + "," + newYs[j];
        }

        var areaPath = linePath + " L400,150 L0,150 Z";

        var lineEl = document.getElementById('metricsChartLine');
        var areaEl = document.getElementById('metricsChartArea');
        if(lineEl && areaEl) {
            lineEl.setAttribute('d', linePath);
            areaEl.setAttribute('d', areaPath);
        }

        // Move dot to point 6 (x=300, 75% of width)
        var dot = document.getElementById('metricsDot');
        if(dot) {
            dot.style.top = (newYs[6] / 150 * 100) + '%';
        }
    }, 2000);
  })();

  // FAQ Toggle Logic
  (function(){
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        // Close all
        faqItems.forEach(function(i) { i.classList.remove('active'); });
        // Toggle current
        if (!isActive) {
          this.classList.add('active');
        }
      });
    });
  })();
</script>
</body>
</html>