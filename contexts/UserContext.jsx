import React, { createContext, useState, useEffect, use } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { app } from "../config/firebase"; // your firebase app instance
import { doc, setDoc,getFirestore } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Useful for initial load
  const [authChecked, setAuthChecked] = useState(false); // To track if auth state has been checked

  useEffect(() => {
    console.log("Inside Unsubscibe");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  async function login(email, password) {
    try {
      console.log("Inside login");
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setAuthChecked(true); // Mark auth as checked after login attempt
    } catch (error) {
      throw Error(error.message);
    }
    setLoading(false);
  }

  async function register(email, password, username = "", phoneNumber = "") {
    try {
      console.log("inside register");
      setLoading(true);

    

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setLoading(true);
      
      console.log("created");
      const user = userCredential.user;

      // optional: set display name in Firebase Auth
      await updateProfile(user, {
        displayName: username,
      });

      console.log("updated");

      // store extra details in Firestore


      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username,
        email,
        phoneNumber,
        createdAt: new Date().toISOString(),
      });

      console.log("firestore added");

      setLoading(true);

      await signOut(auth)
    } catch (error) {
      throw Error(error.message);
    }

    setLoading(false);
  }

  async function logout() {
    try {
      setLoading(true);
      console.log("inside logout");
      await signOut(auth);
      setUser(null);
      setAuthChecked(false);
    } catch (error) {
      throw Error(error.message);
    }

    setLoading(false);
  }

  const getInitialUser = () => {
    try {
      const currentUser = auth.currentUser;
      console.log(auth);
      setUser(currentUser);
      if (currentUser == !null) {
        setAuthChecked(true);
      }
      // setAuthChecked(true); // Mark auth as checked after initial user fetch
    } catch (error) {
      console.error("Error fetching initial user:", error);
    }
  };

  useEffect(() => {
    getInitialUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, authChecked,loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
