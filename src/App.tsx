import React from 'react';
import './index.scss';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/ErrorPage';
import BookingPage from './pages/BookingPage'
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/booking-page" component={BookingPage} />
        <Route component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;