import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC3kvmqRhONPvMShfZSyGgxrXuRPr_wWGY",
  authDomain: "info340-final-project-9e780.firebaseapp.com",
  projectId: "info340-final-project-9e780",
  storageBucket: "info340-final-project-9e780.appspot.com",
  messagingSenderId: "918307765387",
  appId: "1:918307765387:web:f06d273338e89ae9db288e"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();