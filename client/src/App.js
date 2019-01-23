import React, { Component } from 'react';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8080/');

class App extends Component {

  componentDidMount() {
    socket.emit('lol', 'eldomordo');
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
