// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe0f1NMEtbJ6MsTrrvEJDwj4PgwVdhF0Q",
  authDomain: "nextfire-e4757.firebaseapp.com",
  projectId: "nextfire-e4757",
  storageBucket: "nextfire-e4757.appspot.com",
  messagingSenderId: "883879371278",
  appId: "1:883879371278:web:bf37e4fdf81c8a6baa525f",
  measurementId: "G-FCNM2TH9BR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
