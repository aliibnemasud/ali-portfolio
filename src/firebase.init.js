// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgBl7mohD9CqQjkbvw-M_LrrwKvl5BoWA",
  authDomain: "ali-portfolio-7fac5.firebaseapp.com",
  projectId: "ali-portfolio-7fac5",
  storageBucket: "ali-portfolio-7fac5.appspot.com",
  messagingSenderId: "1036370733304",
  appId: "1:1036370733304:web:f3eec99aee068d797e330d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;