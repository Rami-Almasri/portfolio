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
    name: 'FleetView',
    repo: 'Fleet_maintenance',
    demo: null,
    private: true,
    caseStudy: 'fleetview',
    sub: 'Fleet Operations Platform · Faster Cars (UAE)',
    badge: 'Production · Enterprise',
    featured: true,
    filters: ['enterprise', 'react', 'laravel'],
    desc: 'The in-house fleet operations platform for Faster Cars, a car-rental company in the UAE running several hundred vehicles. It owns the operational reality of every car — what is wrong with it, which garage is fixing it, what that cost, and whether it is fit to rent — sitting between the rental system (OfficeManager) and accounting (Odoo).',
    note: 'It replaced a WhatsApp group with a guarded server-side state machine. Every transition is validated, stamps who and when, and auto-notifies the next role; an out-of-sequence move throws and maps to HTTP 422. The load-bearing subtlety is that several states keep the ticket open while the car stays rentable — because rental revenue outranks repairs, and a job already under way can be paused and resumed at exactly the stage it held.',
    tags: ['Laravel 12', 'React 19', 'Workflow State Machine', '134 Tables', '493 Endpoints', 'Sanctum + RBAC', 'Docker', 'Odoo · Sheets · REST Sync'],
  },
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
  fleetview: `
    <span class="cs-tag">Case Study · Production System</span>
    <h2 class="cs-title">FleetView <span class="grad">— Fleet Operations Platform</span></h2>
    <p class="cs-lead">The in-house platform that runs vehicle maintenance for <strong>Faster Cars</strong>, a car-rental company in the UAE. It replaced a WhatsApp group with a guarded state machine — and now owns the operational life of a fleet of several hundred vehicles.</p>

    <div class="cs-section">
      <h3>① The Problem</h3>
      <p>Repairs were coordinated by message. The inspector, the drivers, the controllers and the external garages relayed status to each other in chat, so every state lived in someone's head or scrolled out of history. Nobody could answer the questions that actually cost money: <em>where is this car right now, who touched it last, what did that repair cost, and is this garage fixing things the first time?</em></p>
    </div>

    <div class="cs-section">
      <h3>② Where It Sits</h3>
      <p>FleetView is deliberately <strong>not</strong> a booking system and <strong>not</strong> an accounting system. It sits between two external systems that each own a different truth, and owns the middle: the vehicle's operational and maintenance reality.</p>
      <div class="cs-pills">
        <span>OfficeManager → contracts</span><span>FleetView → the vehicle</span><span>Odoo → the ledger</span>
      </div>
      <p class="cs-fine">A large part of the codebase exists to reconcile systems that disagree — and to stay honest about which one is authoritative for each fact.</p>
    </div>

    <div class="cs-section">
      <h3>③ The Heart: a Guarded Workflow</h3>
      <p>A maintenance ticket is a row whose life is a state machine in <code>MaintenanceWorkflowService</code>. Every transition is <strong>guarded</strong>: an out-of-sequence move, or a handoff missing required data, throws <em>WorkflowTransitionException</em> and the API maps it to HTTP 422. Each transition stamps <strong>who</strong> and <strong>when</strong>, and fires an alert to the next role automatically — the audit trail is generated, never typed.</p>
      <pre class="cs-code"><code>pending_review          controller reviews the request
inspection_*            inspector diagnoses   (no ticket yet)
inspection_pending      ★ the ticket is born
awaiting_dispatch       supervisor picks garage + driver
in_transit              driver captures odometer on pickup
under_repair            external garage works the job
ready_for_reinspection  pass → ready_for_pickup
in_our_park             rentable again
closed</code></pre>
    </div>

    <div class="cs-section">
      <h3>④ The Rule That Shapes Everything</h3>
      <p><strong>Rental is king.</strong> A car earning money outranks a car being fixed, and that single business rule drives the hardest design decisions in the system:</p>
      <ul class="cs-list">
        <li><strong>Fenced states:</strong> several statuses keep the ticket open while the car stays <em>free to rent</em> — the pre-ticket inspection states, the on-site lane, and invoice chasing. Merely inspecting a car must never make it look unavailable.</li>
        <li><strong>Pause &amp; resume:</strong> a repair already under way can be interrupted to release the car to a customer. All progress, notes, parts, photos and history are preserved, the held stage is remembered, and Resume puts it back at exactly that stage — both directions capturing a full custody handover.</li>
        <li><strong>A failed re-inspection returns to a human,</strong> not to the same garage. It lands in the supervisor's queue, visibly flagged as returned in a bad state, so a person decides whether to re-send it.</li>
        <li><strong>The mobile lane:</strong> a battery, a bulb or a tyre is fixed where the car is parked — a committed ticket with no dispatch and no garage, closed by a single action.</li>
      </ul>
    </div>

    <div class="cs-section">
      <h3>⑤ Scale</h3>
      <div class="cs-er">
        <div class="er-node">134 <small>database tables</small></div>
        <div class="er-node">493 <small>API endpoints</small></div>
        <div class="er-node">198 <small>service classes</small></div>
        <div class="er-node">110 <small>Eloquent models</small></div>
        <div class="er-node">104 <small>React pages</small></div>
        <div class="er-node">96 <small>Artisan commands</small></div>
      </div>
      <p class="cs-fine">PHP 8.2 · Laravel 12 · Sanctum · spatie/laravel-permission · MySQL 8 · React 19 · React Router 7 · Tailwind 3 · Docker · bilingual EN/AR.</p>
    </div>

    <div class="cs-section">
      <h3>⑥ Integrations &amp; Intelligence</h3>
      <ul class="cs-list">
        <li><strong>OfficeManager sync</strong> over REST, with <em>two deliberate timeout profiles</em> — a short interactive one for live requests where a user is waiting, and a long batch profile with spaced retries for sync commands, because the upstream server is fragile under load.</li>
        <li><strong>Google Sheets</strong> import for the legacy maintenance log and the fleet register, plus one write-back export; <strong>Odoo 18</strong> over JSON-RPC for the expense ledger.</li>
        <li><strong>Identity discipline:</strong> vehicles resolve through a dedicated <code>PlateResolver</code> — never by plate, because plates get reassigned. Contract ↔ maintenance linking is a strict vehicle + date-window match; no match reports "No Log" rather than guessing.</li>
        <li><strong>Garage scorecard</strong> — case-mix-adjusted vendor performance: fix rates, comeback rates, median and p90 turnaround.</li>
      </ul>
    </div>

    <div class="cs-section">
      <h3>⑦ Engineering Judgement</h3>
      <p>The part I am most willing to be judged on is what the system refuses to claim. Every intelligence field must declare itself <strong>Fact, Judgement, or Derived</strong>; every page must show its <strong>Data Origin</strong>; machine-generated explanations are emitted as reason codes and translated at the edge, never as baked-in English strings.</p>
      <p>When an internal audit measured the predictive layer at only <strong>1.08× lift</strong> — not enough to earn the confidence the UI was prepared to display — those pages were <strong>retired rather than shipped</strong>. The handbook states the known failures in writing, including its own reliability order: <em>running code &gt; service docblocks &gt; the handbook &gt; the design archive.</em> Building something honest about its own limits is harder than building something that looks clever.</p>
    </div>

    <div class="cs-cta">
      <span class="cs-private">🔒 Private client system — source is not public. Walkthrough available on request.</span>
    </div>
  `,

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
  /* Private client systems have no public repo and no self-serve clone path,
     so they show a lock badge instead of a Source / Preview button. */
  const demo = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener" class="proj-btn primary">Live Demo ↗</a>`
    : p.private
      ? ''
      : `<button type="button" class="proj-btn pending" data-preview="${p.repo}">Preview ▷</button>`;
  const cs = p.caseStudy
    ? `<a href="#" class="proj-btn case" data-case="${p.caseStudy}">Case study →</a>`
    : '';
  const src = p.private
    ? `<span class="proj-btn private" title="Proprietary client system — source is not public">Private · client system</span>`
    : `<a href="https://github.com/Rami-Almasri/${p.repo}" target="_blank" rel="noopener" class="proj-btn ghost">Source ↗</a>`;
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
