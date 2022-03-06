// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAeJcFyGfFkqHFw4lmmOaCD7_3q_9J7CBo",
  authDomain: "lab-database-76054.firebaseapp.com",
  projectId: "lab-database-76054",
  storageBucket: "lab-database-76054.appspot.com",
  messagingSenderId: "609220431786",
  appId: "1:609220431786:web:d915897338666438dee5d3",
});

const db = getFirestore(firebaseApp);
export default db;
