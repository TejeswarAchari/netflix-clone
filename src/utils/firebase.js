// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Lr8CFLKHX75kzEJdLt9Cad_SmLIR0GM",
  authDomain: "frameone-ai.firebaseapp.com",
  projectId: "frameone-ai",
  storageBucket: "frameone-ai.firebasestorage.app",
  messagingSenderId: "935678993498",
  appId: "1:935678993498:web:9736b533458a6e98eca463",
  measurementId: "G-MW5BVMHJGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);