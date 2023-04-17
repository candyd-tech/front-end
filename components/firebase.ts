import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDTbScAd9qLjxVal1h3R0UFHdnW_3cT7Ys",
  authDomain: "candyd-tech.firebaseapp.com",
  projectId: "candyd-tech",
  storageBucket: "candyd-tech.appspot.com",
  messagingSenderId: "1089985563059",
  appId: "1:1089985563059:web:baa3f0cb1c165d800163c6",
  measurementId: "G-LVD17D9PWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
