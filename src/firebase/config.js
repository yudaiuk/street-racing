// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqB52zu9neYOs0-q7nE_pRVbwXEY5BDGc",
  authDomain: "street-racing-aab13.firebaseapp.com",
  projectId: "street-racing-aab13",
  storageBucket: "street-racing-aab13.appspot.com",
  messagingSenderId: "1006994883890",
  appId: "1:1006994883890:web:316938dd8d4d2e8073032b",
  measurementId: "G-KGEQN4ZLMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);