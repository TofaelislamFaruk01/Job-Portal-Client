# 💼 Job Portal Client

This is the **frontend** for the Job Portal application, built with **React**, **Tailwind CSS**, and **Firebase Authentication**. It communicates with the backend server hosted on Vercel and provides users a platform to browse, view, and apply for jobs.

> 🌐 Live Website: [https://job-portal-70de2.web.app](https://job-portal-70de2.web.app)

> 🔗 Backend Server: [https://job-portal-server-o7lqgtwhw-tofael-islams-projects.vercel.app](https://job-portal-server-o7lqgtwhw-tofael-islams-projects.vercel.app)

---

## 🚀 Features

- Browse all available jobs
- View detailed job descriptions
- Apply for jobs (with Firebase user authentication)
- View user's applied jobs
- Animations using **Lottie**
- Responsive UI with **Tailwind CSS** & **DaisyUI**
- SweetAlert2 for elegant alerts

---

## 🛠️ Technologies Used

### Frontend

- **React** 19
- **React Router DOM** 7
- **Tailwind CSS** 4
- **DaisyUI** 5
- **Lottie React** (animations)
- **Firebase Auth**
- **SweetAlert2**
- **LocalForage** (for optional local storage)
- **Motion** (framer-motion based animations)

### Build Tools

- **Vite**
- **ESLint**

---


---

## 🔐 Firebase Auth

This project uses Firebase for user login. Ensure you've set up:

- Firebase project
- Email/password authentication enabled
- Web app credentials added

You’ll need a `.env` file with Firebase config:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

---

## 🔗 Server Connection

The frontend communicates with the backend:

https://job-portal-server-o7lqgtwhw-tofael-islams-projects.vercel.app


You’ll find routes like:

- `/jobs` → get all jobs
- `/jobs/:id` → job details
- `/job-applications` → get/post applications

---

## 🧪 Local Development

### Prerequisites

- Node.js 18+
- Firebase CLI (optional)

### Run Locally

```bash
git clone https://github.com/your-username/job-portal-client.git
cd job-portal-client
npm install
npm run dev


