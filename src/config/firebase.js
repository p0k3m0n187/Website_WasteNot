
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwQPMGElIhDD1uLv78tKr-treHLLj1SZI",
  authDomain: "wastenot-577e4.firebaseapp.com",
  projectId: "wastenot-577e4",
  storageBucket: "wastenot-577e4.appspot.com",
  messagingSenderId: "106849617168",
  appId: "1:106849617168:web:35b68408a31beeb33e9195",
  measurementId: "G-HG3DGWRG98"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);