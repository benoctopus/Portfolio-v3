import { Provider } from 'react-redux';
import React, { Component } from 'react';
import store from './store';
import './app.scss';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main />
      </Provider>
    );
  }
}
