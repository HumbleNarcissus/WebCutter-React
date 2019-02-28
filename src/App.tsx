import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import AppRouter from './routes/AppRouter';

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
