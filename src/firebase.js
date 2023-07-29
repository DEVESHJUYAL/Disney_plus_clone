// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyBxo1wau3cKDAymVWZshcN6sgJC48iHzEA",
    authDomain: "disneyclone2023.firebaseapp.com",
    projectId: "disneyclone2023",
    storageBucket: "disneyclone2023.appspot.com",
    messagingSenderId: "840188030161",
    appId: "1:840188030161:web:b09132bbc21cfbb52da9f0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
