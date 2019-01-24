import React, { Component } from 'react';
import MessageMe from './messageMe/messageMe';
import MessageFriend from './messageFriend/messageFriend';

import './messangerChat.css';

class messangerChat extends Component {
  render() {
    return (
        <div className="messanger__chat">
          <MessageFriend text="siema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mój" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDDDDDDD" />
        </div>
    );
  }
}

export default messangerChat;
