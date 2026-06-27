<!--
  HOW TO USE: Copy this file into the root of the `alboraq` repo,
  rename it to exactly `README.md`, replace the screenshot placeholders
  with real images, then commit & push.
-->

<div align="center">

# 🛒 Alboraq — البراق | Samsung Retail E-Commerce

**A full commerce platform for an authorized Samsung retailer — built RTL-first.**

Browse, buy, review, and chat in real time with support — wrapped in a fully animated, responsive Arabic interface. A decoupled Laravel 12 API powering a React 19 storefront.

[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Sanctum](https://img.shields.io/badge/Auth-Sanctum-FF2D20)](https://laravel.com/docs/sanctum)

</div>

---

## 📌 What It Solves

Local electronics retail in Syria is offline and trust-poor. Alboraq gives a real retailer a credible, modern storefront: a searchable catalog, a real cart and checkout, customer reviews for social proof, coupon-driven promotions, and **live human support** — all in native Arabic with full right-to-left layout.

---

## 🖼️ Screenshots

> _Replace these placeholders with real captures (`/docs/screenshots/…`)._

| Storefront (RTL) | Live Support Chat | Admin Orders |
| :---: | :---: | :---: |
| ![Store](https://via.placeholder.com/420x260?text=RTL+Storefront) | ![Chat](https://via.placeholder.com/420x260?text=Live+Chat) | ![Admin](https://via.placeholder.com/420x260?text=Admin+Panel) |

---

## ✨ Key Features

- **💬 Real-Time Support Chat** — a live customer ↔ support messaging channel for pre-sale and post-sale questions.
- **🔐 Role-Based Access Control** — three roles (**admin / support / customer**) enforced via Spatie Permission.
- **🖼️ Media Management** — product imagery handled cleanly with Spatie Media Library.
- **🛍️ Full Commerce Flow** — catalog, cart, orders, product reviews, and discount coupons.
- **🌐 Arabic RTL-First** — animated, responsive right-to-left UI built for native Arabic users.

---

## 🏗️ Architecture

A **decoupled, API-driven** design: the Laravel backend is a stateless REST API; the React app is a standalone SPA that consumes it over Axios with token auth.

```
alboraq/
├── backend/                 # Laravel 12 REST API
│   ├── app/Http/Controllers/
│   ├── app/Models/          # Product, Order, Review, Coupon, Message…
│   ├── app/Policies/        # Authorization
│   └── routes/api.php
└── frontend/                # React 19 + Vite SPA
    ├── src/pages/
    ├── src/components/
    ├── src/context/         # Auth & Cart state
    └── src/services/        # Axios API layer
```

### Access Control (RBAC)

| Role | Capabilities |
| --- | --- |
| **Admin** | Full catalog, orders, users, coupons, analytics |
| **Support** | Live chat, order assistance |
| **Customer** | Browse, cart, checkout, reviews, chat |

---

## 🧰 Tech Stack

| Layer | Technologies |
| --- | --- |
| **Backend** | Laravel 12, PHP 8.2, Sanctum, Spatie Permission, Spatie Media Library |
| **Frontend** | React 19, Vite, Tailwind CSS, Framer Motion, Axios |
| **Real-time** | Broadcasting-driven live chat |
| **Database** | SQLite / MySQL |

---

## 🚀 Getting Started

### Prerequisites
- PHP 8.2+, Composer
- Node.js 18+ & npm

### 1 — Backend (Laravel API)

```bash
# Clone the repository
git clone https://github.com/Rami-Almasri/alboraq.git
cd alboraq/backend

# Install dependencies
composer install

# Environment
cp .env.example .env
php artisan key:generate

# Database + demo data + storage symlink (for media)
php artisan migrate --seed
php artisan storage:link

# Run the API
php artisan serve        # http://localhost:8000
```

### 2 — Frontend (React storefront)

```bash
# From the repository root, in a new terminal
cd alboraq/frontend

# Install dependencies
npm install

# Start the dev server
npm run dev              # http://localhost:5173
```

> The frontend reads the API base URL from `frontend/.env` (e.g. `VITE_API_URL=http://localhost:8000/api`).

---

## 🗺️ Roadmap

- [ ] Payment gateway integration
- [ ] Wishlist & price-drop alerts
- [ ] Arabic full-text product search

---

<div align="center">

**Built by Rami Mazen Almasri**
[GitHub](https://github.com/Rami-Almasri) · [LinkedIn](https://linkedin.com/in/rami-almasri-0a7155377) · ramialmasri101@gmail.com

</div>
