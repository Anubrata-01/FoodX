// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsZGKRuVDqcKGFxBl8JU1Ub6uPRySPSzo",
  authDomain: "foodly-bdda5.firebaseapp.com",
  projectId: "foodly-bdda5",
  storageBucket: "foodly-bdda5.appspot.com",
  messagingSenderId: "666079092489",
  appId: "1:666079092489:web:e7b343f12e62a178e03dd8",
  measurementId: "G-4QMZPB9KGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);