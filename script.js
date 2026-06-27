/* ============================================================
   Rami Almasri — Portfolio interactions
   Vanilla JS, zero dependencies.
   ============================================================ */

/* ---------- Project data ----------
   `demo`: public live URL. Leave null and the card shows a
   "Demo on request" button instead of a dead link. Paste your
   deployed URL here and it instantly becomes a "Live Demo ↗" button. */
const PROJECTS = [
  {
    name: 'Aqar Syria',
    repo: 'Real-Estate',
    demo: 'demos/aqar/index.html',
    caseStudy: 'aqar',
    sub: 'Smart Real-Estate SaaS',
    badge: 'Flagship · SaaS',
    featured: true,
    filters: ['saas', 'laravel'],
    desc: 'A subscription SaaS that turns paper-based brokerages into data-driven platforms. Buyers save preferences and the engine auto-matches listings with a compatibility score; offices get district-level price analytics, 6-month trend charts, and auto-generated Arabic rental/sale contracts as PDFs.',
    note: 'The matching engine and analytics live in dedicated service classes (Matching, Analytics, Contract, Subscription) — not stuffed into controllers. Tiered plans gate property limits and features. This is product thinking, not a CRUD demo.',
    tags: ['Laravel 12', 'Service Layer', 'Chart.js', 'Leaflet Maps', 'dompdf · Arabic RTL', 'Alpine.js', 'GSAP', 'Sanctum'],
  },
  {
    name: 'Alboraq',
    repo: 'alboraq',
    demo: 'demos/alboraq/index.html',
    sub: 'البراق · Samsung Retail E-commerce',
    badge: 'E-commerce · Real-time',
    filters: ['ecommerce', 'react', 'laravel'],
    desc: 'A full e-commerce platform for an authorized Samsung retailer in Syria. Product catalog, cart, orders, reviews, and discount coupons — wrapped in a fully animated, responsive Arabic RTL interface.',
    note: 'Ships a live customer↔support chat system and three-role RBAC (admin / support / customer) via Spatie Permission, plus Media Library for product images. Real-time + auth + RTL in one app is genuinely hard to get right.',
    tags: ['Laravel 12', 'React 19', 'Live Chat', 'Spatie Permission', 'Media Library', 'Tailwind', 'Framer Motion', 'RTL'],
  },
  {
    name: 'Dr.pets',
    repo: 'Dr.pets',
    demo: 'demos/dr-pets/index.html',
    sub: 'Veterinary Management System',
    badge: 'Grad Project · Real-time',
    filters: ['ecommerce', 'react', 'laravel'],
    desc: 'My final graduation project: an all-in-one pet-care platform. Shop premium supplies, book vets and groomers, manage clinics, bookings and medical histories — built on a decoupled Laravel API + React SPA.',
    note: 'Architected a secure API with Role-Based Access Control, real-time Live Chat via Pusher, and Push Notifications via Firebase (FCM). Stripe payments, a consistent { data, success, message } envelope, and a demo-mode fallback so the UI never breaks offline.',
    tags: ['Laravel 11', 'React 18', 'Pusher', 'Firebase FCM', 'Stripe', 'RBAC', 'Sanctum', 'Vite'],
  },
  {
    name: 'Petit Monde',
    repo: 'fashion-ecommerce-laravel-react',
    demo: 'demos/petit-monde/index.html',
    sub: 'Enterprise E-commerce & Inventory',
    badge: 'E-commerce · Analytics',
    filters: ['ecommerce', 'react', 'laravel'],
    desc: "A children's-fashion storefront backed by a Laravel 12 API and a React 18 + Vite shop, with a sophisticated monthly inventory / stocktaking module. Seeded with a realistic catalog: 4 categories, 16 products, 248 variants, 4 branches, and 140 orders.",
    note: 'Models real retail complexity: product variants, multi-branch inventory, employees, and a high-performance admin dashboard (top customers by spend, per-employee sales, branch performance) built with React + MUI. Four-role RBAC from admin down to customer.',
    tags: ['Laravel 12', 'React 18', 'Material UI', 'Inventory Module', 'Variants', 'Analytics', 'Spatie Permission'],
  },
  {
    name: 'Soaply',
    repo: 'Soap_sabikat_alsham',
    demo: 'demos/soaply/index.html',
    sub: 'Artisan Soap E-commerce',
    badge: 'E-commerce · SPA',
    filters: ['ecommerce', 'react', 'laravel'],
    desc: 'A clean, mobile-first storefront for handmade artisanal soap. Real-time search and filtering, Context-API cart, and a true single-page experience via React Router.',
    note: 'Token-managed Axios interceptors handle auth transparently, and the MySQL schema is modeled around products, categories, and orders with optimized relationships. A tidy, decoupled API-mode Laravel + React build.',
    tags: ['Laravel 11 (API)', 'React', 'MySQL', 'Sanctum', 'Context API', 'Axios', 'Tailwind'],
  },
  {
    name: 'Todo Fullstack',
    repo: 'Todo_fullstack',
    demo: 'demos/todo/index.html',
    sub: 'Full-stack CRUD + Material UI',
    badge: 'Fundamentals',
    filters: ['react', 'laravel'],
    desc: 'A complete full-stack todo app with a Laravel REST API and a React + Material UI client. Full CRUD with smooth animated transitions on create, edit, and delete.',
    note: 'The "fundamentals done right" piece: cleanly separated backend-api and frontend-client, REST conventions, and a polished MUI interface. Proof that even the basics get shipped to a professional standard.',
    tags: ['Laravel', 'React', 'Material UI', 'REST API', 'MySQL', 'Axios'],
  },
];

/* ---------- Key achievements (every metric is real) ---------- */
const IMPACT = [
  { metric: 'Service-Layer', label: 'SaaS Architecture', text: 'Built Aqar Syria with a clean matching + analytics engine in dedicated service classes — compatibility scoring across 64 properties in 5 cities.' },
  { metric: 'Real-time', label: 'Chat & Notifications', text: 'Engineered live customer↔support chat (Pusher) and push notifications (Firebase FCM) into production veterinary and e-commerce apps.' },
  { metric: '248', label: 'Variants Modeled', text: 'Designed enterprise retail data with 248 product variants, multi-branch inventory, and a monthly stocktaking module across 4 branches.' },
  { metric: 'Stripe', label: 'Secure Payments', text: 'Integrated Stripe checkout with Sanctum-authenticated APIs and complex cart state management across multiple platforms.' },
  { metric: '4-Role', label: 'Access Control', text: 'Implemented granular Role-Based Access Control (Spatie Permission) — admin, manager, employee, and customer tiers with feature gating.' },
  { metric: 'Query', label: 'Optimization', text: 'Optimized complex MySQL queries with indexing and normalization at IXCoders, cutting data-retrieval time on large datasets.' },
];

const STACK = [
  { title: 'Backend', items: ['PHP', 'Laravel', 'RESTful API Design', 'MVC + Service Pattern', 'Sanctum / Passport', 'API Security', 'Eloquent ORM', 'Stripe', 'dompdf'] },
  { title: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'Material UI (MUI)', 'Tailwind CSS', 'Axios', 'State Management', 'Vite', 'Framer Motion'] },
  { title: 'Database', items: ['MySQL', 'Database Design', 'Normalization', 'Query Optimization', 'Indexing', 'SQLite'] },
  { title: 'Tools & DevOps', items: ['Git / GitHub', 'Postman', 'Pusher (Real-time)', 'Firebase (FCM)', 'Clean Code', 'Chart.js', 'Leaflet'] },
];

/* ---------- Case study content (Aqar Syria) ---------- */
const CASE_STUDIES = {
  aqar: `
    <span class="cs-tag">Case Study · Flagship</span>
    <h2 class="cs-title">Aqar Syria <span class="grad">— Smart Real-Estate SaaS</span></h2>
    <p class="cs-lead">A subscription platform that drags Syria's fragmented, paper-based property market into a data-driven era — with intelligent matching, market analytics, and automated Arabic contracts.</p>

    <div class="cs-section">
      <h3>① The Problem</h3>
      <p>Real-estate offices ran on paper ledgers and WhatsApp. There was no way to match a buyer's exact needs to inventory, no pricing intelligence, and contracts were written by hand. Buyers wasted weeks; offices lost deals they couldn't track.</p>
    </div>

    <div class="cs-section">
      <h3>② The Approach</h3>
      <p>I treated it as a <strong>SaaS product</strong>, not a listings site. Brokerages subscribe to tiered plans; each office manages its own inventory while the platform layers intelligence on top. Critically, all business logic lives in <strong>dedicated service classes</strong> — keeping controllers thin and the domain testable.</p>
      <div class="cs-pills">
        <span>MatchingService</span><span>AnalyticsService</span><span>ContractService</span><span>SubscriptionService</span>
      </div>
    </div>

    <div class="cs-section">
      <h3>③ Technical Architecture</h3>
      <ul class="cs-list">
        <li><strong>Matching engine:</strong> buyers persist preferences (location, type, price, rooms, area); a scoring algorithm filters listings and emits <em>MatchNotifications</em> with a compatibility score.</li>
        <li><strong>Analytics:</strong> per-district average prices, 6-month trend lines, and supply/demand ratios rendered with Chart.js; locations mapped via Leaflet.</li>
        <li><strong>Contract automation:</strong> dompdf + ar-php generate fully RTL Arabic rental/sale PDFs, with smart expiration alerts.</li>
        <li><strong>Subscriptions:</strong> three tiers gate property limits and feature access at the service layer.</li>
        <li><strong>Zero-build frontend:</strong> Blade + Alpine.js + GSAP/AOS over CDN — instant load, no toolchain to break, bilingual RTL/LTR.</li>
      </ul>
    </div>

    <div class="cs-section">
      <h3>④ Database Design</h3>
      <p>A normalized schema designed around the domain — not bolted on. Core entities and their relationships:</p>
      <div class="cs-er">
        <div class="er-node">Office <small>1—∞ Properties · has Subscription</small></div>
        <div class="er-node">Property <small>belongs to Office · District · Type</small></div>
        <div class="er-node">Preference <small>belongs to Buyer · drives matching</small></div>
        <div class="er-node">MatchNotification <small>Property ⇄ Preference + score</small></div>
        <div class="er-node">Contract <small>Property · parties · PDF · expiry</small></div>
        <div class="er-node">Subscription <small>Office · plan · limits</small></div>
      </div>
      <p class="cs-fine">Seeded with 64 realistic properties across 5 cities for demo-ready analytics.</p>
    </div>

    <div class="cs-section">
      <h3>⑤ Outcome</h3>
      <p>A complete, demoable SaaS: buyers get scored matches instead of endless scrolling, offices get a live market dashboard and one-click legal PDFs, and the codebase stays maintainable because the hard logic is isolated and named. It's the project I point to when someone asks, <em>"can you own a product end-to-end?"</em></p>
    </div>

    <div class="cs-cta">
      <a href="https://github.com/Rami-Almasri/Real-Estate" target="_blank" rel="noopener" class="btn btn-primary">View source ↗</a>
    </div>
  `,
};

/* ---------- Per-project local-run instructions (for preview modal) ---------- */
const SETUP = {
  alboraq: { backend: 'cd alboraq/backend', frontend: 'cd alboraq/frontend' },
  Soap_sabikat_alsham: { backend: 'cd Soap_sabikat_alsham/soap-backend', frontend: 'cd Soap_sabikat_alsham/soap-frontend' },
  Todo_fullstack: { backend: 'cd Todo_fullstack/backend-api', frontend: 'cd Todo_fullstack/frontend-client' },
  'Real-Estate': { single: true },
};

/* ---------- Render projects ---------- */
function projectActions(p) {
  const demo = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener" class="proj-btn primary">Live Demo ↗</a>`
    : `<button type="button" class="proj-btn pending" data-preview="${p.repo}">Preview ▷</button>`;
  const cs = p.caseStudy
    ? `<a href="#" class="proj-btn case" data-case="${p.caseStudy}">Case study →</a>`
    : '';
  const src = `<a href="https://github.com/Rami-Almasri/${p.repo}" target="_blank" rel="noopener" class="proj-btn ghost">Source ↗</a>`;
  return demo + cs + src;
}

/* ---------- Preview modal content (apps that need a hosted backend) ---------- */
function previewHTML(p) {
  const s = SETUP[p.repo] || {};
  const mail = `mailto:ramialmasri101@gmail.com`
    + `?subject=${encodeURIComponent('Live walkthrough request — ' + p.name)}`
    + `&body=${encodeURIComponent('Hi Rami,\n\nCould you send me a live walkthrough of ' + p.name + '?\n\nThanks,')}`;
  const steps = s.single
    ? `# 1 — Clone &amp; install
git clone https://github.com/Rami-Almasri/${p.repo}.git
cd ${p.repo}
composer install &amp;&amp; npm install

# 2 — Configure &amp; seed
cp .env.example .env &amp;&amp; php artisan key:generate
php artisan migrate --seed

# 3 — Run
npm run dev          # assets
php artisan serve    # http://localhost:8000`
    : `# 1 — Backend (Laravel API)
git clone https://github.com/Rami-Almasri/${p.repo}.git
${s.backend || 'cd ' + p.repo + '/backend'}
composer install &amp;&amp; cp .env.example .env
php artisan key:generate &amp;&amp; php artisan migrate --seed
php artisan serve        # http://localhost:8000

# 2 — Frontend (new terminal)
${s.frontend || 'cd ' + p.repo + '/frontend'}
npm install &amp;&amp; npm run dev   # http://localhost:5173`;
  return `
    <span class="cs-tag">Live Preview</span>
    <h2 class="cs-title">${p.name} <span class="grad">— run it yourself</span></h2>
    <p class="cs-lead">${p.sub}. This is a full-stack app with a Laravel API and database, so a public demo needs the backend hosted. Here's the complete experience running locally in ~2 minutes:</p>
    <div class="cs-section">
      <h3>⚙️ Quickstart</h3>
      <pre class="cs-code"><code>${steps}</code></pre>
    </div>
    <div class="cs-section">
      <h3>💡 Want a guided walkthrough instead?</h3>
      <p>I'm happy to give a live screen-share demo, or spin up a hosted instance on request.</p>
    </div>
    <div class="cs-cta">
      <a href="https://github.com/Rami-Almasri/${p.repo}" target="_blank" rel="noopener" class="btn btn-primary">View source ↗</a>
      <a href="${mail}" class="btn btn-ghost">Request a walkthrough</a>
    </div>
  `;
}

document.getElementById('projects').innerHTML = PROJECTS.map((p, i) => `
  <article class="project reveal ${p.featured ? 'featured' : ''}" data-filters="${p.filters.join(' ')}" style="--d:${(i % 2) * 0.08}s">
    <div class="project-top">
      <span class="project-badge">${p.badge}</span>
      <span class="project-num">0${i + 1}</span>
    </div>
    <h3>${p.name}</h3>
    <div class="sub">${p.sub}</div>
    <p class="desc">${p.desc}</p>
    <div class="project-note">
      <span>⌁ ENGINEER'S NOTE</span>
      <p>${p.note}</p>
    </div>
    <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    <div class="project-links">${projectActions(p, i)}</div>
  </article>
`).join('');

/* ---------- Render impact ---------- */
document.getElementById('impactGrid').innerHTML = IMPACT.map(it => `
  <div class="impact-card reveal">
    <div class="impact-metric grad">${it.metric}</div>
    <div class="impact-label">${it.label}</div>
    <p>${it.text}</p>
  </div>
`).join('');

/* ---------- Render stack ---------- */
document.getElementById('stackGrid').innerHTML = STACK.map(c => `
  <div class="stack-col reveal">
    <h3><i></i>${c.title}</h3>
    <div class="stack-list">${c.items.map(it => `<span>${it}</span>`).join('')}</div>
  </div>
`).join('');

/* ---------- Case study modal ---------- */
const modal = document.getElementById('caseModal');
const caseBody = document.getElementById('caseBody');
function openModal(html) {
  if (!html) return;
  caseBody.innerHTML = html;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-panel').scrollTop = 0;
}
function closeCase() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.addEventListener('click', e => {
  const caseT = e.target.closest('[data-case]');
  if (caseT) { e.preventDefault(); openModal(CASE_STUDIES[caseT.dataset.case]); return; }
  const prevT = e.target.closest('[data-preview]');
  if (prevT) {
    e.preventDefault();
    const proj = PROJECTS.find(p => p.repo === prevT.dataset.preview);
    if (proj) openModal(previewHTML(proj));
    return;
  }
  if (e.target.closest('[data-close]')) closeCase();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCase(); });

/* ---------- Filters ---------- */
const filterBar = document.getElementById('filters');
filterBar.addEventListener('click', e => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  filterBar.querySelector('.active')?.classList.remove('active');
  btn.classList.add('active');
  const f = btn.dataset.filter;
  document.querySelectorAll('.project').forEach(card => {
    const match = f === 'all' || card.dataset.filters.split(' ').includes(f);
    card.classList.toggle('hide', !match);
  });
});

/* ---------- Cursor-follow glow on project cards ---------- */
document.addEventListener('pointermove', e => {
  const card = e.target.closest('.project');
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - r.left}px`);
  card.style.setProperty('--my', `${e.clientY - r.top}px`);
});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Animated stat counters ---------- */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    const target = +el.dataset.count;
    let cur = 0;
    const step = Math.max(1, Math.round(target / 40));
    const tick = () => {
      cur = Math.min(target, cur + step);
      el.textContent = cur;
      if (cur < target) requestAnimationFrame(tick);
    };
    tick();
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

/* ---------- Navbar scroll state + progress bar ---------- */
const nav = document.getElementById('nav');
const progress = document.getElementById('scrollProgress');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / h) * 100}%`;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */
const burger = document.getElementById('navBurger');
const links = document.querySelector('.nav-links');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('open'); });

/* ---------- Year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
