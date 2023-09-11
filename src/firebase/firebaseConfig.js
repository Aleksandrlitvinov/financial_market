import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrHUZexF-rSKy1tWEkxxs7WzgMGv6ZThU",
  authDomain: "financial-market-e9c7e.firebaseapp.com",
  projectId: "financial-market-e9c7e",
  storageBucket: "financial-market-e9c7e.appspot.com",
  messagingSenderId: "547468430947",
  appId: "1:547468430947:web:1275b584d1563f6ab53256"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)