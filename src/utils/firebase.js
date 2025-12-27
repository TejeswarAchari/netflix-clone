// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKFYj3xRtxaxmZIQPUc3JpeOhSBhiQ4jA",
  authDomain: "netflixgpt-a4d16.firebaseapp.com",
  projectId: "netflixgpt-a4d16",
  storageBucket: "netflixgpt-a4d16.firebasestorage.app",
  messagingSenderId: "83992599450",
  appId: "1:83992599450:web:83590ad392a9ade0297823",
  measurementId: "G-VHE3P68FT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);