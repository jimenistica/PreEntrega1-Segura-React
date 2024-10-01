import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBC94Wkm6k9dxu0UJKrRm-MHghwt2qMiiI",
  authDomain: "melodia-simple-react-proyect.firebaseapp.com",
  projectId: "melodia-simple-react-proyect",
  storageBucket: "melodia-simple-react-proyect.appspot.com",
  messagingSenderId: "78271810168",
  appId: "1:78271810168:web:31fb5d7b4cde6edf67bb8d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);