import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDBY2M4m2QYihUzoWk1ICnOUc-IGNn_3_I",
    authDomain: "shopping-bc400.firebaseapp.com",
    projectId: "shopping-bc400",
    storageBucket: "shopping-bc400.appspot.com",
    messagingSenderId: "259071624754",
    appId: "1:259071624754:web:aabf453d92b9adce725e2b",
    measurementId: "G-5QPF5G8DZ7"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }