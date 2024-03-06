// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPistt0vzp6fo_V5qe9zXwUoVQz40ILso",
  authDomain: "foodyx-87dfd.firebaseapp.com",
  projectId: "foodyx-87dfd",
  storageBucket: "foodyx-87dfd.appspot.com",
  messagingSenderId: "27432123491",
  appId: "1:27432123491:web:172e899d117b3a56128c56",
  measurementId: "G-GLPWX3VTX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const auth = getAuth(app);