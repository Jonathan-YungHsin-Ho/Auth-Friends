import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className='header'>
        <img src={require('./img/friends.png')} alt='friends logo' />
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friendslist'>Friends</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/friendslist' component={FriendsList} />
      </Switch>
    </Router>
  );
}

export default App;
