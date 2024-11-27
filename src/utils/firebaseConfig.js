// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzuA6mbYb6SnF1AqunBZUTKLTewDGfdTU",
  authDomain: "real-time-task-manager-2d159.firebaseapp.com",
  projectId: "real-time-task-manager-2d159",
  storageBucket: "real-time-task-manager-2d159.firebasestorage.app",
  messagingSenderId: "361076085910",
  appId: "1:361076085910:web:6c7da7328153eccaa49eb7",
  measurementId: "G-RDKN9RQV4V"
};

// Initialize Firebase`
const app = initializeApp(firebaseConfig);
//initialize analytics

const auth = getAuth(app);
const db = getFirestore(app); // Use Firestore here


export { auth, db };