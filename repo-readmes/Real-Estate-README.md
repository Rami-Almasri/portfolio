<!--
  HOW TO USE: Copy this file into the root of the `Real-Estate` repo,
  rename it to exactly `README.md`, replace the screenshot placeholders
  with real images, then commit & push.
-->

<div align="center">

# 🏘️ Aqar Syria — Smart Real-Estate SaaS

**Dragging a fragmented, paper-based property market into the data-driven era.**

A subscription platform that gives brokerages an intelligent matching engine, live market analytics, and one-click automated Arabic contracts — so buyers stop scrolling and offices stop losing deals.

[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel&logoColor=white)](https://laravel.com)
[![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?logo=php&logoColor=white)](https://php.net)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-3-8BC0D0?logo=alpinedotjs&logoColor=black)](https://alpinejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

</div>

---

## 📌 The Problem

Real-estate offices in Syria run on paper ledgers and WhatsApp. There is no way to match a buyer's exact requirements to inventory, no pricing intelligence to set fair prices, and every contract is written by hand. Buyers waste weeks; offices lose deals they can't even track.

**Aqar Syria** treats this as a *SaaS product*, not a listings board: brokerages subscribe to tiered plans, manage their own inventory, and the platform layers intelligence on top.

---

## 🖼️ Screenshots

> _Replace these placeholders with real captures (`/docs/screenshots/…`)._

| Dashboard & Analytics | Smart Matching | Arabic Contract (PDF) |
| :---: | :---: | :---: |
| ![Dashboard](https://via.placeholder.com/420x260?text=Analytics+Dashboard) | ![Matching](https://via.placeholder.com/420x260?text=Smart+Matching) | ![Contract](https://via.placeholder.com/420x260?text=RTL+PDF+Contract) |

---

## ✨ Key Features

- **🎯 Intelligent Matching Engine** — buyers persist preferences (location, type, price, rooms, area); a scoring algorithm filters listings and emits match notifications with a **compatibility score**.
- **📊 Market Analytics** — per-district average prices, 6-month price trends, and supply/demand ratios, visualized with Chart.js and mapped via Leaflet.
- **📄 Automated Contracts** — generates fully **RTL Arabic** rental/sale contract PDFs (dompdf + ar-php) with smart expiration alerts.
- **💳 Tiered Subscriptions** — three plans gating property limits and feature access, enforced at the service layer.
- **🌐 Bilingual UI** — responsive Arabic (RTL) / English interface with GSAP & AOS micro-interactions.

---

## 🏗️ Architecture — Service Pattern

Business logic is deliberately **kept out of controllers** and isolated in dedicated, single-responsibility service classes. This keeps the domain testable, controllers thin, and the codebase maintainable as it grows.

```
app/
├── Http/Controllers/      # Thin — orchestration only
├── Services/
│   ├── MatchingService.php       # Preference → property scoring
│   ├── AnalyticsService.php      # District pricing, trends, ratios
│   ├── ContractService.php       # RTL PDF generation + expiry
│   └── SubscriptionService.php   # Plan limits & feature gating
└── Models/                # Office, Property, Preference,
                           # MatchNotification, Contract, Subscription
```

### Data Model (normalized)

| Entity | Relationship |
| --- | --- |
| **Office** | has many **Properties**, has one **Subscription** |
| **Property** | belongs to **Office**, **District**, **Type** |
| **Preference** | belongs to **Buyer** — drives matching |
| **MatchNotification** | links **Property ⇄ Preference** with a score |
| **Contract** | belongs to **Property**, holds parties + PDF + expiry |
| **Subscription** | belongs to **Office** — plan & limits |

---

## 🧰 Tech Stack

| Layer | Technologies |
| --- | --- |
| **Backend** | Laravel 12, PHP 8.2, Service Pattern, Sanctum |
| **Frontend** | Blade, Alpine.js, Tailwind CSS, GSAP, AOS |
| **Data & Viz** | SQLite / MySQL, Chart.js, Leaflet |
| **Documents** | dompdf + ar-php (Arabic RTL PDFs) |

---

## 🚀 Getting Started

### Prerequisites
- PHP 8.2+, Composer
- Node.js 18+ & npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Rami-Almasri/Real-Estate.git
cd Real-Estate

# 2. Install PHP dependencies
composer install

# 3. Configure environment
cp .env.example .env
php artisan key:generate

# 4. Create the database and seed demo data
#    (64 sample properties across 5 cities)
php artisan migrate --seed

# 5. Install & build front-end assets
npm install
npm run dev          # or `npm run build` for production

# 6. Serve the application
php artisan serve
```

Visit **http://localhost:8000**.

---

## 🗺️ Roadmap

- [ ] Saved-search email digests
- [ ] Map-based property discovery
- [ ] Office-to-office referral marketplace

---

<div align="center">

**Built by Rami Mazen Almasri**
[GitHub](https://github.com/Rami-Almasri) · [LinkedIn](https://linkedin.com/in/rami-almasri-0a7155377) · ramialmasri101@gmail.com

</div>
