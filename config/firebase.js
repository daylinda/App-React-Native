import { initializeApp, getApps, getApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAoUirYqK0d9_E92MO0uqzdNisLGbE1X8Q",
  authDomain: "trackerapp-b5664.firebaseapp.com",
  databaseURL:
    "https://trackerapp-b5664-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trackerapp-b5664",
  storageBucket: "trackerapp-b5664.firebasestorage.app",
  messagingSenderId: "601546372984",
  appId: "1:601546372984:web:3f7cb6ff35a986c34f7a8d",
  measurementId: "G-13C0MRJD2B",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export default app;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
