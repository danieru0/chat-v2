import React, { Component } from 'react';
import Friends from './friends/friends';
import Messanger from './messanger/messanger';

import './chat.css';

class Chat extends Component {
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
