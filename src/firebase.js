// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVVxIqacpv21Vo6p9Tzpu53_O3zPKtmN8",
  authDomain: "socialmedia-app-98dbf.firebaseapp.com",
  projectId: "socialmedia-app-98dbf",
  storageBucket: "socialmedia-app-98dbf.appspot.com",
  messagingSenderId: "493754023207",
  appId: "1:493754023207:web:fa4efb1984b4eeee30fd02",
  measurementId: "G-7L5598TV4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;