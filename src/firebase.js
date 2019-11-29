import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyA6h8Mg4QNU0OBoQ-VLuD4yNVxuu7OeogQ",
    authDomain: "eventoo-8cecb.firebaseapp.com",
    databaseURL: "https://eventoo-8cecb.firebaseio.com",
    projectId: "eventoo-8cecb",
    storageBucket: "eventoo-8cecb.appspot.com",
    messagingSenderId: "658292772563",
    appId: "1:658292772563:web:b4ff978b8c70fa13ec0e26",
    measurementId: "G-G7JQRJYJML"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export {fb}