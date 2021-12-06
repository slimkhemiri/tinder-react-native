// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8c-ZPtq6lDvBs7NX4rmFR_JaG8-jCg14",
  authDomain: "tinder2project.firebaseapp.com",
  projectId: "tinder2project",
  storageBucket: "tinder2project.appspot.com",
  messagingSenderId: "7157327839",
  appId: "1:7157327839:web:9833c8f3fbc11849c2066a",
  measurementId: "G-R2QD88S38J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
