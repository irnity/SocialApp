// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTEqazM9xp1WWEnLPTHOIoTN7gv6gq-4U",
  authDomain: "socialapp-7e85e.firebaseapp.com",
  projectId: "socialapp-7e85e",
  storageBucket: "socialapp-7e85e.appspot.com",
  messagingSenderId: "976602220863",
  appId: "1:976602220863:web:337df3077c4ae141d42b8a",
  measurementId: "G-LNFHGWNRXQ",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
