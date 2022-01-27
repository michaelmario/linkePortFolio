import  firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
import 'firebase/storage'
// replace the values with your firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBa0mObiJVKY-JN_VYfBEIOBDaEIkykQQ0",
    authDomain: "creation-digital.firebaseapp.com",
    databaseURL: "https://creation-digital.firebaseio.com",
    projectId: "creation-digital",
    storageBucket: "creation-digital.appspot.com",
    messagingSenderId: "1044799716579",
    appId: "1:1044799716579:web:1dde0fcb618c908c"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
// collection references
const usersCollection = db.collection('users');
export {
    db,
    auth,
    storage, 
    usersCollection,
    timestamp  
}