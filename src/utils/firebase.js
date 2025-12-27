// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSOzsYhs9RJ97nC4LbL-JYwW7rXJveb6E",
  authDomain: "netflixgpt-final-f1f1a.firebaseapp.com",
  projectId: "netflixgpt-final-f1f1a",
  storageBucket: "netflixgpt-final-f1f1a.firebasestorage.app",
  messagingSenderId: "486961605808",
  appId: "1:486961605808:web:c18011507bcf4fd1799f75",
  measurementId: "G-4FHY67VZ23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

