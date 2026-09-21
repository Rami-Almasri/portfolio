# Rami Almasri — Project Notes

A senior-style breakdown of each project: what it is, the stack, and the **one thing**
that makes it non-trivial engineering (the "note" a hiring lead actually cares about).

> **Live Demo links:** each project below has a `Live Demo:` line. These apps have a Laravel
> backend + database, so they need a PHP host (Railway/Render) for the API plus Vercel/Netlify
> for the React frontend — they aren't auto-live like a static site. Paste a deployed URL into
> the `demo` field in `script.js` and the card button flips from **"Demo on request"** to
> **"Live Demo ↗"** automatically. (Ask me and I'll walk you through deploying any one of them.)

---

## 1. FleetView — Fleet Operations Platform  ⭐ Production
**Repo:** `Fleet_maintenance` — **private (proprietary client system)**
**Live Demo:** _Not public — walkthrough on request._
**Stack:** PHP 8.2 · Laravel 12 · Sanctum · spatie/laravel-permission · MySQL 8 · React 19 · React Router 7 · Tailwind 3 · Docker · Google Sheets API · Odoo 18 JSON-RPC

The in-house fleet operations platform for **Faster Cars**, a car-rental company in the UAE running several
hundred vehicles. It owns the operational life of every car — the fault, the garage, the cost, the custody
handovers, and whether the car is fit to rent — sitting between OfficeManager (contracts) and Odoo (the ledger).
It replaced a WhatsApp group.

- **Guarded workflow state machine:** every maintenance transition is validated, stamps who and when, and auto-notifies the next role. Out-of-sequence moves throw `WorkflowTransitionException` → HTTP 422.
- **Rental-is-king semantics:** "fenced" states keep a ticket open while the car stays rentable; an in-progress repair can be *paused* to release the car and *resumed* at exactly the stage it held, with full custody handover both ways.
- **Integration reconciliation:** OfficeManager REST sync with two deliberate timeout profiles (interactive vs. batch), Google Sheets import/export, Odoo JSON-RPC expense ledger.
- **Garage scorecard:** case-mix-adjusted vendor performance — fix rates, comeback rates, median and p90 turnaround.
- **Scale:** 134 tables · 493 API endpoints · 198 services · 110 models · 104 React pages · 96 Artisan commands.

> **Note:** The engineering judgement worth pointing at is what it refuses to claim. Every intelligence field declares itself Fact / Judgement / Derived, every page shows its Data Origin, and when an audit measured the predictive layer at only **1.08× lift**, those pages were retired rather than shipped.

---

## 2. Aqar Syria — Smart Real-Estate SaaS  ⭐ Flagship
**Repo:** [Real-Estate](https://github.com/Rami-Almasri/Real-Estate)
**Live Demo:** _On request — deploy-ready (Laravel + Blade)._
**Stack:** Laravel 12 · Blade · Alpine.js · GSAP/AOS · Chart.js · Leaflet · dompdf (ar-php) · Sanctum · SQLite→MySQL

Subscription SaaS that turns paper-based brokerages into data-driven platforms.
- **Intelligent matching:** buyers save preferences (location, type, price, rooms, area); the engine auto-filters listings and generates match notifications with a compatibility score.
- **Market analytics:** per-district average prices, 6-month price trends, supply/demand ratios.
- **Contract automation:** generates RTL Arabic rental/sale contract PDFs with expiry alerts.
- **Tiered subscriptions:** three plans controlling property limits and feature access.

> **Note:** Business logic lives in dedicated service classes (Matching, Analytics, Contract, Subscription) — not controllers. This is product architecture, not a CRUD demo.

---

## 3. Alboraq — Samsung Retail E-commerce (Arabic RTL)
**Repo:** [alboraq](https://github.com/Rami-Almasri/alboraq)
**Live Demo:** _On request — deploy-ready (Laravel API + React)._
**Stack:** Laravel 12 · React 19 · Vite · Tailwind · Framer Motion · Spatie Permission · Spatie Media Library · Sanctum

Full e-commerce platform for البراق للاتصالات, an authorized Samsung retailer in Syria.
- Product browsing, cart, orders, reviews, discount coupons.
- Three roles: admin / support / customer.
- Animated, responsive **Arabic RTL** interface.

> **Note:** Ships a real-time customer↔support **live chat** plus RBAC and media handling. Real-time + auth + RTL together is genuinely hard to get right.

---

## 4. Dr.pets — Pet-care Marketplace
**Repo:** [Dr.pets](https://github.com/Rami-Almasri/Dr.pets)
**Live Demo:** _On request — deploy-ready (Laravel API + React)._
**Stack:** Laravel 11 · React 18 · Vite · Tailwind · Framer Motion · React Router · Stripe · Sanctum

All-in-one pet-care platform: shop supplies, book vets/groomers, community.
- Decoupled Laravel API + React SPA (proxied dev at :5173 → :8000).
- Role-based access: admin / provider / viewer.

> **Note:** Stripe payments, a consistent `{ data, success, message }` API envelope, and a **demo-mode fallback** so the UI keeps working when the backend is offline.

---

## 5. Petit Monde — Children's Fashion Store
**Repo:** [fashion-ecommerce-laravel-react](https://github.com/Rami-Almasri/fashion-ecommerce-laravel-react)
**Live Demo:** _On request — deploy-ready (Laravel API + React)._
**Stack:** Laravel 12 · React 18 · Vite · Tailwind · Framer Motion · Spatie Permission · Axios

Children's-fashion storefront with a seeded, realistic catalog (4 categories, 16 products, 248 variants, 4 branches, 140 orders).
- Product variants, multi-branch inventory, employees.
- Admin analytics: top customers by spend, per-employee sales, branch performance.
- Four-role RBAC (admin / manager / employee / customer).

> **Note:** Models real retail complexity — variants and multi-branch inventory — not a single flat product table.

---

## 6. Soaply — Artisan Soap E-commerce
**Repo:** [Soap_sabikat_alsham](https://github.com/Rami-Almasri/Soap_sabikat_alsham)
**Live Demo:** _On request — deploy-ready (Laravel API + React)._
**Stack:** Laravel 11 (API) · React · MySQL · Sanctum · Context API · Axios · Tailwind

Mobile-first storefront for handmade soap with real-time search/filter and a Context-API cart.

> **Note:** Token-managed Axios interceptors handle auth transparently; MySQL schema optimized around products/categories/orders. Clean decoupled SPA.

---

## 7. Todo Fullstack — Fundamentals, done right
**Repo:** [Todo_fullstack](https://github.com/Rami-Almasri/Todo_fullstack)
**Live Demo:** _On request — deploy-ready (Laravel API + React)._
**Stack:** Laravel · React · Material UI · REST · MySQL · Axios

Full CRUD todo app with animated transitions, cleanly split into `backend-api` and `frontend-client`.

> **Note:** Proof the basics ship to a professional standard — REST conventions + polished MUI UI.

---

### Repos intentionally left off the portfolio
- **Ramadan** — early Laravel project, no custom README yet. *(Add a README + screenshots and it can join the grid.)*
- **test**, **test2** — scratch/learning repos. Recommend making them private so the profile reads clean.
