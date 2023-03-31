import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgNjczJUOxOPUcH82ri_XjkWhKMSSNdPc",
    authDomain: "clone-ceac5.firebaseapp.com",
    projectId: "clone-ceac5",
    storageBucket: "clone-ceac5.appspot.com",
    messagingSenderId: "214309256833",
    appId: "1:214309256833:web:f5e0aa9dda22f8401a9780",
    measurementId: "G-3KWD8G4D31"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
