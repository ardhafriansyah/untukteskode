// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7HgJq8XIusYjM-p6ly-WwkAE4jQJ6CxI",
  authDomain: "himamiaweb25.firebaseapp.com",
  projectId: "himamiaweb25",
  storageBucket: "himamiaweb25.firebasestorage.app",
  messagingSenderId: "221670280017",
  appId: "1:221670280017:web:308066165b701cb13e6170",
  measurementId: "G-35KECME56Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db, collection, addDoc, getDocs, deleteDoc, doc };
