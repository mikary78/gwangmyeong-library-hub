# Gwangmyeong Small Library Hub (광명시 작은도서관 통합 정보 플랫폼)

## 📖 Project Overview
**Gwangmyeong Small Library Hub** is a comprehensive web platform designed to connect citizens with small libraries in Gwangmyeong. It provides a centralized hub for finding libraries, exploring programs, and accessing community stories, while offering library operators an efficient management system.

## ✨ Key Features

### 🏛️ Frontend (Client)
- **Premium Design System**: Modern, responsive UI with custom CSS variables and glassmorphism effects.
- **Library Search & Map**: Find libraries by type (Public, Private, Kids, etc.) with an interactive map view.
- **Program Calendar**: View and register for library programs via a calendar or list view.
- **Community Hub**: Access library news, notices, and interviews with librarians.
- **Responsive Layout**: Optimized for both desktop and mobile devices.

### 🛠️ Backend (Server)
- **Robust API**: RESTful API built with **NestJS**.
- **Authentication**: Secure admin login using JWT (JSON Web Tokens).
- **Database Management**: **Prisma ORM** for type-safe database interactions (SQLite for Dev / PostgreSQL ready).
- **File Upload**: Image upload capability for library photos and program thumbnails.
- **Swagger Documentation**: (Planned) Auto-generated API documentation.

## 🚀 Tech Stack

### Client
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Modules (Custom Design System)
- **State Management**: React Hooks

### Server
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: SQLite (Development), PostgreSQL (Production)
- **ORM**: Prisma
- **Auth**: Passport.js, JWT

## 📂 Project Structure

```bash
gwangmyeong-library-hub/
├── client/                 # Next.js Frontend
│   ├── src/app/           # App Router Pages
│   ├── src/components/    # Reusable Components
│   └── public/            # Static Assets
├── server/                 # NestJS Backend
│   ├── src/auth/          # Authentication Module
│   ├── src/libraries/     # Library Management
│   ├── src/programs/      # Program Management
│   ├── src/users/         # User/Admin Management
│   └── prisma/            # Database Schema
└── README.md
```

## ⚡ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Backend Setup
```bash
cd server
npm install

# Database Setup
npx prisma migrate dev --name init

# Run Server (Port 3001)
npm run start:dev
```

### 2. Frontend Setup
```bash
cd client
npm install

# Run Client (Port 3000)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License.
