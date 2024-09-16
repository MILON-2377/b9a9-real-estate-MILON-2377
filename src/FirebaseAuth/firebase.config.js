// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFEd-kCsXw79W8IT0TpE068_Le3NqjPw0",
  authDomain: "real-state-assignment-project.firebaseapp.com",
  projectId: "real-state-assignment-project",
  storageBucket: "real-state-assignment-project.appspot.com",
  messagingSenderId: "790548014812",
  appId: "1:790548014812:web:5ed5700b3fc5b185ceb619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;