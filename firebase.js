// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0KhRgtuCFHeaVrJlzxyyZKFuLpKPfYL8",
  authDomain: "backenddev-bfdc1.firebaseapp.com",
  projectId: "backenddev-bfdc1",
  storageBucket: "backenddev-bfdc1.appspot.com",
  messagingSenderId: "319240320199",
  appId: "1:319240320199:web:9f2542b23eb6566da43ae2",
  measurementId: "G-PTGC15V7XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);