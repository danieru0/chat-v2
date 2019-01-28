import React, { Component } from 'react';
import MessageMe from './messageMe/messageMe';
import MessageFriend from './messageFriend/messageFriend';

import './messangerChat.css';

class messangerChat extends Component {
  componentDidMount() {
    let chatElement = document.getElementById('messanger-chat');
    chatElement.scrollTop = chatElement.scrollHeight;
  }

  render() {
    const { messages } = this.props;
    //<MessageMe text="XDDDDDDDDDDDDDDDDDDDDDDDDD" />
    //<MessageFriend text="siema eniu ziomeczku mój" />
    return (
        <div id="messanger-chat" className="messanger__chat">
          {
            messages.length !== 0 ? (
              <h1>nwm</h1>
            ) : (
              ''
            )
          }
        </div>
    );
  }
}

export default messangerChat;
