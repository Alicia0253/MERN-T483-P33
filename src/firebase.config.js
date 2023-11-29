import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALu9S5nbjvESROIEKoBLirSondTkG6YsY",
  authDomain: "art-gallery-app-266be.firebaseapp.com",
  databaseURL: "https://art-gallery-app-266be-default-rtdb.firebaseio.com",
  projectId: "art-gallery-app-266be",
  storageBucket: "art-gallery-app-266be.appspot.com",
  messagingSenderId: "764935203196",
  appId: "1:764935203196:web:1e1260839f8a6116abdcf9",
  measurementId: "G-FXLY1JKQ03"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
