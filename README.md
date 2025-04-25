Absolutely! Here’s a professional, structured `README.md` file for your **ShelfMaster** project. It highlights your stack, features, setup, and deployment:

---

# 🗂️ ShelfMaster

ShelfMaster is a modern full-stack inventory and expense management dashboard. It offers real-time insights into product sales, purchases, and expenses through a clean, user-friendly UI. Built with **Next.js**, **Express**, **Prisma**, and **PostgreSQL**, ShelfMaster is ideal for managing inventory, users, and analytics with secure APIs and beautiful charts.

## 🚀 Tech Stack

### Frontend:
- **Next.js 15** (React)
- **TailwindCSS 3**
- **Material UI (MUI)**
- **Redux Toolkit + Redux Persist**
- **Recharts**
- **Lucide Icons**

### Backend:
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **dotenv**
- **Helmet, Morgan, CORS**

### Dev & Deploy:
- **Vercel** (Frontend)
- **Render** (Backend & Database)
- **Nodemon**, **ts-node**, **rimraf**

# Server setup
<!-- npm init -y
npm i prisma @prisma/client
npx prisma init
npm i -D ts-node typescript @types/node
npx tsc --init
npm i fs path 
npx prisma generate
npx prisma migrate dev --name init
npm run seed
npm i express body-parser cors dotenv helmet morgan concurrently
npm i -D nodemon @types/cors @types/express @types/morgan

EC2 -hosting for backend
RDS -for postgres database
Amplify - for host nextjs
S3- for inventories -->

---

## 📸 Screenshots

![Dashboard Screenshot](./screenshot.png) <!-- Rename `image.png` to `screenshot.png` or update path -->

---

## 🔑 Features

- 📦 Product Listing with Price & Sales Data  
- 📊 Dynamic Sales, Purchase & Expense Graphs  
- 👥 User Management  
- 🔐 Secure API Routes (Helmet, CORS)  
- 🌐 Fully Responsive UI  
- 🌱 Seedable DB for quick setup  
- ⚙️ Role-ready structure for admin/user extension  

---

## 📁 Project Structure

```
/client   → Frontend (Next.js)
/server   → Backend (Express + Prisma)
/prisma   → Prisma schema & seed script
```

---

## 🛠️ Setup Instructions

### Clone the repo:
```bash
git clone https://github.com/your-username/shelfmaster.git
cd shelfmaster
```

### 1️⃣ Server Setup

```bash
cd server
npm install
npx prisma generate
npx prisma db push     # or npx prisma migrate dev
npm run dev
```

🔒 Create `.env` in `/server`:
```env
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<db>?schema=public
PORT=8000
```

### 2️⃣ Client Setup

```bash
cd client
npm install
npm run dev
```

🔒 Create `.env.local` in `/client`:
```env
NEXT_PUBLIC_API_URL=https://<your-render-server-url>
```

---

## 🌍 Deployment

- **Client**: Deployed on [Vercel](https://vercel.com)
- **Server**: Deployed on [Render](https://render.com)
- **Database**: PostgreSQL via Render

---

## 📦 Scripts

### Server (`/server/package.json`)
```json
"build": "npx rimraf dist && npx tsc",
"start": "npm run build && node dist/index.js",
"dev": "npm run build && concurrently \"npx tsc -w\" \"nodemon --exec ts-node src/index.ts\""
```

### Client (`/client/package.json`)
```json
"dev": "next dev",
"build": "next build",
"start": "next start"
```

---

## 🤝 Contributing

PRs are welcome. Open an issue for bugs or features.

---

## 🧑‍💻 Author

**Abhik** – [https://github.com/Abhik-Nayak]

