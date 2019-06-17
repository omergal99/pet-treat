import React, { Component } from 'react';
import './assets/css/App.scss';

import Chat from './pages/Chat';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Chat />
      </div>
    );
  }
}

export default App;