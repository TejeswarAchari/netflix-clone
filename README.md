# 🎬 FrameOne AI

**The next-generation movie streaming platform powered by Artificial Intelligence.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![OpenAI](https://img.shields.io/badge/AI_Powered-412991?style=for-the-badge&logo=openai&logoColor=white)

---

## 📖 Overview

**FrameOne** is not just a clone; it is a fully responsive, feature-rich web application that reimagines the Netflix user experience. Built with a robust **React** frontend and **Firebase** backend, it integrates cutting-edge **Generative AI (GPT)** to allow users to search for movies using natural language prompts (e.g., *"Funny retro movies from the 90s"*).

The application features a seamless, mobile-first design, secure authentication, real-time data fetching from TMDB, and an immersive browsing experience with interactive video playback and detail modals.

## ✨ Key Features

### 🤖 AI-Powered Search (GPT Integrated)
- Replaces traditional keyword search with an **Intelligent Recommendation System**.
- Users can ask for movie suggestions based on mood, genre, or specific plot points.
- Powered by OpenAI/Groq API for lightning-fast responses.

### 🔐 Secure Authentication
- Robust user handling using **Firebase Authentication**.
- Sign Up, Sign In, and Sign Out functionality.
- Profile management with dynamic user avatars and validation.

### 📱 Fully Responsive & Modern UI
- **Mobile-First Approach:** Optimized for all devices from mobile phones to 4K desktops.
- **Glassmorphism & Gradients:** Beautiful, modern aesthetic using **Tailwind CSS**.
- **Smooth Animations:** Integrated **Framer Motion** for dropdowns and transitions.
- **Shimmer UI:** Polished loading states for a seamless user experience.

### 🎥 Immersive Content Browsing
- **Dynamic Hero Section:** Autoplay video background with title and overview overlay.
- **Categorized Feeds:** Now Playing, Popular, Top Rated, Upcoming, and Horror collections.
- **Interactive Modals:** Click on any movie card to open a detailed view with the official trailer and extended metadata.

### 🌍 Multi-Language Support
- Built-in localization for **English, Hindi, and Spanish**.
- Real-time language switching across the entire application interface.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Redux Toolkit, React Router DOM |
| **Styling** | Tailwind CSS, Framer Motion |
| **Backend / Auth** | Firebase (Auth, Analytics) |
| **Data Source** | TMDB (The Movie Database) API |
| **Artificial Intelligence** | OpenAI / Groq API (LLM Integration) |
| **Forms** | React Hook Form / Custom Validation |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js installed
- A TMDB API Key
- A Firebase Project
- An OpenAI or Groq API Key

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/frameone-ai.git
cd frameone-ai
2️⃣ Install dependencies

npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and add the following keys:

env

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_GROQ_API_KEY=your_groq_api_key
⚠️ Never commit your .env file to GitHub

4️⃣ Start the development server

npm start
The app will run on:

http://localhost:3000

📁 Project Constants
All global constants used across the application are defined in:

src/utils/constants.js
🔹 Branding & Assets

export const FrameOne = "/FrameOne.png";

export const LOGO = FrameOne;

export const PHOTO_URL =
  "https://cdn.imgbin.com/1/19/14/social-icon-male-user-icon-man-icon-xqC9m5zD.jpg";
LOGO: App branding logo

PHOTO_URL: Default user profile avatar

🔹 TMDB API Configuration

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer TMDB_API,
  },
};

🔹 Image CDN

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";
Used to render movie posters and backdrops from TMDB

🔹 Background Image

export const BG_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_large.jpg";
Netflix-style hero background image

🔹 Supported Languages

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
Used for language toggle and AI prompt localization

🌍 Supported Languages
English
Hindi
Spanish

```
📄 License
Distributed under the MIT License.
See LICENSE for more information.


<p align="center"> Built with ❤️ by <b>Tejeswar Achari</b> </p> 
