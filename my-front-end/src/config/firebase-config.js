// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBM1S_N-wlJl7qc5PqiaBmnQd3LAZs5cVs",
  authDomain: "sportdays-1797e.firebaseapp.com",
  projectId: "sportdays-1797e",
  storageBucket: "sportdays-1797e.appspot.com",
  messagingSenderId: "82375676415",
  appId: "1:82375676415:web:e914b27b7b424020c997ca",
  measurementId: "G-25GXCKCDEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);