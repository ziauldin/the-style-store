# 🛍️ The Style Store

The frontend for a Pakistani boutique that sells handmade fashion and home textiles. It's built with Next.js, TypeScript, and Tailwind CSS. It has a filterable shop, product pages with galleries, a cart and wishlist saved in the browser, and a checkout with cash on delivery or bank transfer. This is a frontend prototype: products come from local data files, and the checkout shows a simulated confirmation without sending an order or taking payment.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radixui&logoColor=white)

## ✨ Features
- 🏠 Home page with hero, category grid, product rails, testimonials, and a WhatsApp call to action
- 🧵 Six categories: handmade dresses, chadars, bedsheets, sofa covers, fan covers, and warm shawls
- 🔎 Shop page with filters, sorting, and a search dialog
- 🖼️ Product pages with image gallery, badges, ratings, and pricing
- 🛒 Cart drawer and ❤️ wishlist, both kept in `localStorage`
- 💵 Checkout form with cash on delivery or bank transfer (simulated confirmation)
- 📄 About, contact, shipping, return, privacy, and terms pages
- 📱 Responsive layout with mobile navigation and Framer Motion animations

## 🚀 Run locally

```bash
git clone https://github.com/ziauldin/the-style-store.git
cd the-style-store
npm install
npm run dev
```

Open http://localhost:3000. For a production build run `npm run build`, then `npm start`.

## 🛠️ Tech stack
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Radix UI · Lucide icons
