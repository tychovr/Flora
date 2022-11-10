// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4q-fKvpgyvoaSU0f_nvgPTJb0vv6EVO8",
  authDomain: "flora-6a4aa.firebaseapp.com",
  projectId: "flora-6a4aa",
  storageBucket: "flora-6a4aa.appspot.com",
  messagingSenderId: "209904131317",
  appId: "1:209904131317:web:cfb8a4d3eceebff3e079bc",
  measurementId: "G-76RWV2XKRV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const signUpStudent = async (username, email, password, classID) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      username,
      email,
      password,
      classID
    );

    const user = response.user;
    await addDoc(collection(db, "student"), {
      uid: user.uid,
      username,
      authProvider: "local",
      email,
      classID,
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const signUpTeacher = async (username, email, password, classID) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      username,
      email,
      password,
      classID
    );

    const user = response.user;
    await addDoc(collection(db, "teacher"), {
      uid: user.uid,
      username,
      authProvider: "local",
      email,
      classID,
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const logOut = () => {
  signOut(auth);
};

// Initialize Firebase
export { auth, db, logIn, signUpStudent, signUpTeacher, logOut };
