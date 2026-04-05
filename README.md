# 🍳 Recipe Demo: Smart Recipe Generator

A modern, AI-powered recipe discovery application built with **React** and **Firebase AI Logic**, leveraging **Gemini 2.5 Flash Lite** to turn your leftover ingredients into delicious West African meals.

This application provides a seamless experience for home cooks, allowing users to input available ingredients and receive authentic, culturally rich recipe suggestions with a friendly, expert touch.

![AI Powered](https://img.shields.io/badge/AI-Gemini--2.5--Flash--Lite-blue)
![Firebase](https://img.shields.io/badge/Backend-Firebase-ffca28?logo=firebase)
![React](https://img.shields.io/badge/Frontend-React-61dafb?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind--CSS-38b2ac?logo=tailwind-css)

## 📱 App Preview

> **Interface Design**: Featuring a clean, centered layout with high-quality visual feedback. The UI focuses on simplicity, making it easy to generate recipes on the fly with smooth streaming responses.

| ![Home Screen](s1.png) | ![Recipe Generation](s2.png) | ![Search Results](s3.png) |
| :---: | :---: | :---: |
| **Home Screen** | **AI Generation** | **Detailed Recipe** |

## ✨ Features

- **🧠 Intelligent Chef**: Powered by Gemini 2.5 Flash Lite, acting as a knowledgeable Ghanaian chef with expertise in West African cuisine.
- **✨ Instant Generation**: Uses Firebase AI Logic for real-time streaming of recipe content.
- **🇬🇭 Cultural Authenticity**: Provides recipes with local language names (Twi, Ga, Ewe, etc.) and cultural context.
- **📱 Responsive UI**: A mobile-first, clean web interface built with React and Tailwind CSS.
- **🔄 Smart Reset**: Easily clear your ingredients and start a new culinary journey with one click.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (JavaScript)
- **AI Backend**: [Firebase AI Logic](https://firebase.google.com/docs/ai) with Gemini 2.5 Flash Lite
- **Styling**: Tailwind CSS
- **Deployment**: Firebase Hosting (Recommended)

## 🚀 Quick Start

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed locally.
- A [Firebase Project](https://console.firebase.google.com/) with AI Logic enabled.

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/Mtettey29/recipedemo.git
cd recipedemo

# Install dependencies
npm install
```

### 3. Configuration
Update your Firebase configuration in `src/firebase.js`:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT",
    // ... other config values
};
```

### 4. Run Locally
```bash
npm start
```
Visit `http://localhost:3000` to start cooking!

---
*Built with ⚡ for the Build with AI Event. ©2026*
