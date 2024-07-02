import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQTny9tQzf8Ofr_0GuGXXRVB49jH8CIOE",
  authDomain: "disney-clone-new-607e7.firebaseapp.com",
  projectId: "disney-clone-new-607e7",
  storageBucket: "disney-clone-new-607e7.appspot.com",
  messagingSenderId: "570426392201",
  appId: "1:570426392201:web:91257f78cb23f2279a9058",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
