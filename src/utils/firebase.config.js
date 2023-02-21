// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7WS4w1E58DwbeYJVIY5a0A-LHpjO-AVI",
  authDomain: "my-cookbook-d19b5.firebaseapp.com",
  projectId: "my-cookbook-d19b5",
  storageBucket: "my-cookbook-d19b5.appspot.com",
  messagingSenderId: "362224399771",
  appId: "1:362224399771:web:d96eacc4ce5ac66fbd9d3e",
  measurementId: "G-RC0FF8Z98Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);  // TODO: initialize
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);