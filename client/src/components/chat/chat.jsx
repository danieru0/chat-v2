import React, { Component } from 'react';
import Friends from './friends/friends';
import Messanger from './messanger/messanger';

import socket from '../../socket/socket';

import './chat.css';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      chats: null,
      username: null,
      avatars: null
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  componentDidMount() {
    this._mounted = true;
    socket.emit('getUserChats');
    if (this._mounted) {
      socket.on('getUserChatsResult', (chat, name, avatars) => {
        if (this._mounted) {
          this.setState({ chats: chat, username: name, avatars: avatars });
        }
      });
    }
  }

  render() {
    return (
        <div className="chat">
            <Friends avatars={this.state.avatars} chats={this.state.chats} name={this.state.username} />
            <Messanger />
        </div>
    );
  }
}

export default Chat;