// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-83505.firebaseapp.com",
  projectId: "blog-83505",
  storageBucket: "blog-83505.appspot.com",
  messagingSenderId: "614011847670",
  appId: "1:614011847670:web:7066b1dcb99eaca7befdd7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);