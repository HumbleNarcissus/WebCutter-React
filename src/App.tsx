import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Sites from './Components/Sites/Sites';
import store from './store';
import Login from './Components/auth/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          {/* <Sites /> */}
          <Login />
        </div>
      </Provider>
    );
  }
}

export default App;
