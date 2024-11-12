// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaz_geC4BWdqNO8hkEzyVx1kLtQPy-JZ4",
  authDomain: "fakeout-9bdaa.firebaseapp.com",
  projectId: "fakeout-9bdaa",
  storageBucket: "fakeout-9bdaa.firebasestorage.app",
  messagingSenderId: "735189905768",
  appId: "1:735189905768:web:9b1705be2aca824b09e6dd",
  measurementId: "G-QZJHT63P12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };