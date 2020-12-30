import React from 'react';
import ReactDOM from 'react-dom';
import { RoomProvider } from './store/context';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import firebase from "firebase/app"

firebase.initializeApp({
    apiKey: "AIzaSyDHE9fVBUM_mto-p_SkWnyKtOiRu8M5F98",
    authDomain: "react-firebase-farazamiruddin.firebaseapp.com",
    databaseURL: "https://react-firebase-farazamiruddin.firebaseio.com",
    projectId: "react-firebase-farazamiruddin",
    storageBucket: "react-firebase-farazamiruddin.appspot.com",
    messagingSenderId: "338564911587",
    appId: "1:338564911587:web:c34e6fee0ff41bbe7fd0d6"
  });
ReactDOM.render(   
<RoomProvider>
    <Router>
        <App />
    </Router>
</RoomProvider>, 
document.getElementById('root'));

serviceWorker.unregister();
