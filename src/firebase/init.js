import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "jarpups.firebaseapp.com",
  databaseURL: "https://jarpups.firebaseio.com",
  projectId: "jarpups",
  storageBucket: "jarpups.appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSENGING_SENDER_ID
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
