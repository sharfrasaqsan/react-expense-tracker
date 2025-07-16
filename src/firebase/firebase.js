// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGupL1vRrKN0LqZyHQelGZEAl1NnZs5Jw",
  authDomain: "expense-tracker-9e977.firebaseapp.com",
  projectId: "expense-tracker-9e977",
  storageBucket: "expense-tracker-9e977.firebasestorage.app",
  messagingSenderId: "942404449417",
  appId: "1:942404449417:web:4dea29e1814c9dca91c258",
  measurementId: "G-37DQX9PNJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
