import React, { Component } from 'react';
import { Provider } from 'react-redux';
import jwt_decode from "jwt-decode";
import './App.css';
import store from './store';
import AppRouter from './routes/AppRouter';
import { setCurrentUser } from './actions/authActions';

// Check for token
if (localStorage.jwtToken) {
  // Decode token and get user info and exp
  const decoded: any = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    localStorage.removeItem('jwtToken');
    // set curretn user to {}
    store.dispatch(setCurrentUser({}));
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
