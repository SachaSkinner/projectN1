 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAUJTTJuKKMVo0XhMBgJy4Yb4rlEqxF44M",
    authDomain: "wethepeople-540c7.firebaseapp.com",
    databaseURL: "https://wethepeople-540c7.firebaseio.com",
    projectId: "wethepeople-540c7",
    storageBucket: "",
    messagingSenderId: "334787074944",
    appId: "1:334787074944:web:233853d54e81067d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
const fs = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  fs.settings(settings);
