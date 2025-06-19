# 🔥 FlameGuard

**FlameGuard** is a modern e-commerce web application for fire safety equipment built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. It provides users with a smooth and responsive shopping experience, complete with authentication, profile management, cart features, and mock order history.

<br>

## 🌐 Live Demo

[👉 Visit FlameGuard on Vercel](https://fire-extinguisher-site.vercel.app/)

---

## 🛠️ Features

* 🔐 **Authentication** – Sign up, log in, and log out using mock auth stored in `localStorage`.
* 🛒 **Product Listings** – Browse fire extinguishers with detailed descriptions, ratings, and availability.
* 👤 **User Profile** – View and edit user info (mock data), including address and contact info.
* 📦 **Cart System** – Add items to cart, view totals, and simulate purchases.
* 🧾 **Order History** – Mock order history with styling for different order statuses.
* 🎨 **Responsive UI** – Built using Tailwind CSS for fast and mobile-friendly styling.

---

## ⚙️ Tech Stack

| Technology   | Purpose                      |
| ------------ | ---------------------------- |
| React + TS   | Frontend UI & logic          |
| Tailwind CSS | Styling                      |
| Vite         | Fast dev server & build tool |
| Lucide React | Icon library                 |
| localStorage | Store session + mock data    |

---

## 🧰 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/mitchellwanjiru/fireextinguisherproject.git
cd project
```

### 2. **Install Dependencies**

Make sure you have **Node.js** installed (v16+ recommended).

```bash
npm install
```

### 3. **Run the Development Server**

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Folder Structure

```
project/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   ├── contexts/
│   ├── data/        # Auth and cart context logic
│   ├── pages/            # Page views like Home, Profile
           
│   ├── App.tsx           # Main App component
|   ├── index.css         # Tailwind CSS (index.css)
│   └── main.tsx          # Entry point
├── .gitignore
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## ⚠️ Notes

* This app uses **mock data** for authentication and product listing. No backend or real database is connected.
* For real projects, you can integrate Firebase Auth and MongoDB (or any DB) using APIs.
* Profile changes are not persisted across sessions unless stored using a backend.

---

## 📄 License

This project is open-source and free to use for learning and non-commercial use.

---
Please leave a star!
