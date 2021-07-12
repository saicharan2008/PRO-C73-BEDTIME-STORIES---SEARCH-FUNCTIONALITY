import * as firebase from 'firebase';
require('@firebase/firestore');

 var firebaseConfig = {
    apiKey: "AIzaSyC1er7a3hTcQmoI48Z3tBSdnp3aOw7ZXPw",
    authDomain: "bed-story-8b36e.firebaseapp.com",
    projectId: "bed-story-8b36e",
    storageBucket: "bed-story-8b36e.appspot.com",
    messagingSenderId: "992632492679",
    appId: "1:992632492679:web:41b27a385c5487fbae9e22"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
