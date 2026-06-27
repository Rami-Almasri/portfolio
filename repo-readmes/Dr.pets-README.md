<!--
  HOW TO USE: Copy this file into the root of the `Dr.pets` repo,
  rename it to exactly `README.md`, replace the screenshot placeholders
  with real images, then commit & push.
-->

<div align="center">

# 🐾 Dr.Pets — Veterinary Management System

**One platform for everything a pet needs — shop, book a vet, and keep the medical history in one place.**

My final graduation project: an all-in-one pet-care platform built on a secure, role-based Laravel API and a React SPA, with real-time chat and push notifications baked in.

[![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Pusher](https://img.shields.io/badge/Pusher-Realtime-300D4F?logo=pusher&logoColor=white)](https://pusher.com)
[![Firebase](https://img.shields.io/badge/Firebase-FCM-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe&logoColor=white)](https://stripe.com)

</div>

---

## 📌 What It Solves

Pet owners juggle a vet's phone number, a pet shop, and a paper vaccination card. Dr.Pets unifies the journey: buy premium supplies, **book vets and groomers**, message clinics in real time, and keep every booking and medical record in one secure account — while clinics manage their schedules and histories from the same backend.

---

## 🖼️ Screenshots

> _Replace these placeholders with real captures (`/docs/screenshots/…`)._

| Home / Store | Booking Flow | Live Chat |
| :---: | :---: | :---: |
| ![Home](https://via.placeholder.com/420x260?text=Home+%26+Store) | ![Booking](https://via.placeholder.com/420x260?text=Vet+Booking) | ![Chat](https://via.placeholder.com/420x260?text=Live+Chat) |

---

## ✨ Key Features

- **🔐 Role-Based Access Control (RBAC)** — a secure API with **admin / provider / viewer** roles, each scoped to exactly what it should see.
- **💬 Real-Time Live Chat** — owner ↔ clinic messaging powered by **Pusher**.
- **🔔 Push Notifications** — booking and status alerts delivered via **Firebase Cloud Messaging (FCM)**.
- **💳 Secure Payments** — **Stripe** checkout integrated with the cart and order flow.
- **🩺 Clinical Records** — a **normalized** schema managing clinics, bookings, and medical histories.
- **🛡️ Resilient UI** — a demo-mode fallback so the React app stays usable even if the API is offline.

---

## 🏗️ Architecture

A **decoupled API + SPA**. Every API response uses a consistent envelope so the client never guesses at shape:

```json
{ "success": true, "message": "OK", "data": { } }
```

```
Dr.pets/
├── app/
│   ├── Http/Controllers/Api/
│   ├── Models/              # User, Pet, Clinic, Booking, MedicalRecord, Order…
│   └── Services/            # Booking, Payment, Notification logic
├── routes/api.php           # Sanctum-protected, role-gated routes
└── frontend/                # React 18 + Vite SPA
    ├── src/pages/
    ├── src/components/
    ├── src/context/         # Auth & Cart
    └── src/api/             # Axios client + interceptors
```

### Access Control (RBAC)

| Role | Capabilities |
| --- | --- |
| **Admin** | Manage clinics, providers, catalog, orders |
| **Provider** | Manage own bookings, schedules, medical records |
| **Viewer (Owner)** | Shop, book, chat, view their pets' history |

---

## 🧰 Tech Stack

| Layer | Technologies |
| --- | --- |
| **Backend** | Laravel 11, PHP 8.2, Sanctum, Service Pattern |
| **Frontend** | React 18, Vite, Tailwind CSS, Framer Motion, React Router |
| **Real-time** | Pusher (chat), Firebase Cloud Messaging (push) |
| **Payments** | Stripe |
| **Database** | SQLite / MySQL |

---

## 🚀 Getting Started

### Prerequisites
- PHP 8.2+, Composer
- Node.js 18+ & npm
- Pusher, Firebase & Stripe credentials (for real-time, push & payments)

### 1 — Backend (Laravel API)

```bash
# Clone the repository
git clone https://github.com/Rami-Almasri/Dr.pets.git
cd Dr.pets

# Install dependencies
composer install

# Environment
cp .env.example .env
php artisan key:generate

# Add your keys to .env:
#   PUSHER_APP_ID / PUSHER_APP_KEY / PUSHER_APP_SECRET / PUSHER_APP_CLUSTER
#   STRIPE_KEY / STRIPE_SECRET
#   FIREBASE_CREDENTIALS (path to service-account JSON)

# Database + demo data
php artisan migrate --seed
php artisan storage:link

# Run the API
php artisan serve        # http://localhost:8000
```

### 2 — Frontend (React SPA)

```bash
# From the repository root, in a new terminal
cd frontend

# Install dependencies
npm install

# Start the dev server (proxies API calls to :8000)
npm run dev              # http://localhost:5173
```

---

## 🗺️ Roadmap

- [ ] Provider-side analytics dashboard
- [ ] Recurring vaccination reminders
- [ ] Multi-clinic franchise support

---

<div align="center">

**Built by Rami Mazen Almasri** · Final Graduation Project
[GitHub](https://github.com/Rami-Almasri) · [LinkedIn](https://linkedin.com/in/rami-almasri-0a7155377) · ramialmasri101@gmail.com

</div>
