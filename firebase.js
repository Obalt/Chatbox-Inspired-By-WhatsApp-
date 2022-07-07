import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDj1ZQX0Y9MIvZbWD5bWbIWVrVQLlhZHcE",
  authDomain: "chatbox-dcc09.firebaseapp.com",
  projectId: "chatbox-dcc09",
  storageBucket: "chatbox-dcc09.appspot.com",
  messagingSenderId: "285108815274",
  appId: "1:285108815274:web:00bb5914024540d18997d3",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}