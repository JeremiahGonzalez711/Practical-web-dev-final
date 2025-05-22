// Import core Firebase functionality
import { initializeApp } from "firebase/app";

// Import Firestore and Auth functions explicitly
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your actual Firebase configuration (replace with your own config values)
const firebaseConfig = {
  apiKey: "AIzaSyBUpxNi5IdvaMNx0fVbO1FKOe1mRlthdyU",
  authDomain: "final-project-ec3d5.firebaseapp.com",
  projectId: "final-project-ec3d5",
  storageBucket: "final-project-ec3d5.appspot.com",
  messagingSenderId: "494687671076",
  appId: "1:494687671076:web:fbb56083391dc3b14019b1"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export initialized services to use throughout your app
export const db = getFirestore(app);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();
