import React, { Component } from 'react';
import { withRouter } from 'react-router'

import './App.css';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default  withRouter(App);
