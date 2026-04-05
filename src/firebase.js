// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

// Replace these values with your own from the Firebase Console
const firebaseConfig = {
    apiKey: "REPLACED_FIREBASE_API_KEY",
    authDomain: "gdgrecipegen.firebaseapp.com",
    projectId: "gdgrecipegen",
    storageBucket: "gdgrecipegen.firebasestorage.app",
    messagingSenderId: "179109305558",
    appId: "1:179109305558:web:7afd43b937514b7602fd77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase AI Logic with the Gemini Developer API backend
const ai = getAI(app, { backend: new GoogleAIBackend() });

// Get a Gemini model instance — export it so any component can use it
export const model = getGenerativeModel(ai, { model: "gemini-2.5-flash-lite" });