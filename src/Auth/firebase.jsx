// Import necessary Firebase and React functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth to initialize auth
import { getFirestore } from "firebase/firestore"; // Import getFirestore to initialize Firestore
import { getAnalytics } from "firebase/analytics";
import React, { createContext, useContext, useState, useEffect } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLjTHzbLASlzvbo6H_7vBb21BTwAW2sVo",
  authDomain: "kacha-bazer.firebaseapp.com",
  projectId: "kacha-bazer",
  storageBucket: "kacha-bazer.firebasestorage.app",
  messagingSenderId: "447131216755",
  appId: "1:447131216755:web:f56bec4c10f75247303306",
  measurementId: "G-3S4E60QK47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize auth and firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

// Create an AuthContext
const AuthContext = createContext(); // Define AuthContext

// Create a provider component for AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the services and AuthContext
export { auth, firestore, analytics, AuthContext };
