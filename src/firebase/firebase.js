// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO5TxI0t_2s0FyX_sJDm-KaOsea5VFS4Q",
  authDomain: "react-entrega-final.firebaseapp.com",
  projectId: "react-entrega-final",
  storageBucket: "react-entrega-final.appspot.com",
  messagingSenderId: "1075238887119",
  appId: "1:1075238887119:web:f896b3e84b263f942361ba",
  measurementId: "G-JQKL6G99V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);