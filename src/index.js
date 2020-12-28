import React from 'react';
import ReactDOM from 'react-dom';
import { RoomProvider } from './store/context';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
ReactDOM.render(
<RoomProvider>
    <Router>
        <App />
    </Router>
</RoomProvider>, 
document.getElementById('root'));

serviceWorker.unregister();
