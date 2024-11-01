import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBWkgljr5F0mz0C0ooj2yrhC9XW87j3gC0",
  authDomain: "hotel-reservation-2271b.firebaseapp.com",
  projectId: "hotel-reservation-2271b",
  storageBucket: "hotel-reservation-2271b.appspot.com",
  messagingSenderId: "468931285196",
  appId: "1:468931285196:web:1018e7b37c32ec8370b269",
  measurementId: "G-T3L7L1RRTF"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;