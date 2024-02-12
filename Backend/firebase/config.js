
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API-KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.  NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "labibb-a1ecc.appspot.com",
  messagingSenderId: "188901640312",
  appId: "1:188901640312:web:076aa7bb995eee513f458d",
//   measurementId: "G-W2TSHK4HL2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);