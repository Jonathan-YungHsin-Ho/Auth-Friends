import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsPage from './components/FriendsPage';

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
            <Link to='/friendspage'>Friends</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/friendspage' component={FriendsPage} />
      </Switch>
    </Router>
  );
}

export default App;
