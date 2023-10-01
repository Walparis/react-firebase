// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzrgm2WbEnED42FlxTD1AermuOjVazppk",
  authDomain: "fir-react-d73ae.firebaseapp.com",
  projectId: "fir-react-d73ae",
  storageBucket: "fir-react-d73ae.appspot.com",
  messagingSenderId: "1098678143919",
  appId: "1:1098678143919:web:961643271452aa16cdbd5a",
  measurementId: "G-G7V9VFDQWH",
};

// Initialize Firebase
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);