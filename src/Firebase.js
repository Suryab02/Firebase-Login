
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.google_id,
  authDomain: "react-firebase-auth-932af.firebaseapp.com",
  projectId: "react-firebase-auth-932af",
  storageBucket: "react-firebase-auth-932af.appspot.com",
  messagingSenderId: process.env.firebase_messagingSenderId,
  appId: process.env.api_id
};
const app = initializeApp(firebaseConfig);

export default app;