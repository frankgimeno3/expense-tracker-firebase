// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvpmo-9U8-2jDFBm9rTkjGHeMAvMi17NU",
  authDomain: "expense-tracker-ffec5.firebaseapp.com",
  projectId: "expense-tracker-ffec5",
  storageBucket: "expense-tracker-ffec5.appspot.com",
  messagingSenderId: "1018467887876",
  appId: "1:1018467887876:web:a2bbc2ac14a2d440e2fe51"
};

  
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);