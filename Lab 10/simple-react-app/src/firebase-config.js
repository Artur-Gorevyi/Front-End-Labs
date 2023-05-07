import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5zuLNcMo0Gjnl2Gh0CmVD7IavrYSb-sI",
  authDomain: "expense-tracker-front-end.firebaseapp.com",
  projectId: "expense-tracker-front-end",
  storageBucket: "expense-tracker-front-end.appspot.com",
  messagingSenderId: "397078712332",
  appId: "1:397078712332:web:604edf310cd356bc879e29",
  measurementId: "G-XR5N34V2C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;