import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Sites from './Components/Sites/Sites';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Sites />
        </div>
      </Provider>
    );
  }
}

export default App;
