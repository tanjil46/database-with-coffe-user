// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKBq_ZFq-dUw3Nr4mk5mgquVXMmOktBTw",
  authDomain: "database-user-16fd0.firebaseapp.com",
  projectId: "database-user-16fd0",
  storageBucket: "database-user-16fd0.appspot.com",
  messagingSenderId: "1046623852800",
  appId: "1:1046623852800:web:059d766cb46c23ca4e7be5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;