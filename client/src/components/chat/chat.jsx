import React, { Component } from 'react';
import Friends from './friends/friends';
import Messanger from './messanger/messanger';
//import openSocket from 'socket.io-client';

import './chat.css';

class Chat extends Component {

  componentDidMount() {
    //const socket = openSocket('http://localhost:8080/');
    
  }

  render() {
    return (
        <div className="chat">
            <Friends />
            <Messanger />
        </div>
    );
  }
}

export default Chat;