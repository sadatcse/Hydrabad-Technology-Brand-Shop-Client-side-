// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIGVsbVsWLFF2Lg1kqCc1zPtGbRrzuPYQ",
  authDomain: "assignment-10-sadat.firebaseapp.com",
  projectId: "assignment-10-sadat",
  storageBucket: "assignment-10-sadat.appspot.com",
  messagingSenderId: "246271979610",
  appId: "1:246271979610:web:abde9d41a9f1eb0ec72863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;