import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyCKxFTrP4t2yL3MKpWe139klo8ceohx4ME",
    authDomain: "hotel-booker-e5570.firebaseapp.com",
    projectId: "hotel-booker-e5570",
    storageBucket: "hotel-booker-e5570.appspot.com",
    messagingSenderId: "565265256996",
    appId: "1:565265256996:web:e46ab0794e3f8bace67eb1",
    measurementId: "G-GXH9M63ESJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;