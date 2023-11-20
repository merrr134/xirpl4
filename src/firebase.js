// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcavlhc6VlxZBQdd9WkJTy_8TReo64yLI",
  authDomain: "web-11rpl4.firebaseapp.com",
  projectId: "web-11rpl4",
  storageBucket: "web-11rpl4.appspot.com",
  messagingSenderId: "142217366031",
  appId: "1:142217366031:web:c8f454c8f4890e375c717a",
  measurementId: "G-2BQYP5WWW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();