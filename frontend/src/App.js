import React, { Component } from 'react';
import './assets/css/App.scss';

import Router from './Router';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;