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
    return (
        <div id="messanger-chat" className="messanger__chat">
          <MessageFriend text="siema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mójsiema eniu ziomeczku mój" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDDwefewfwefDDDDD" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDDDDDDD" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDwefwefDDDDDD" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDwefwefwefDDDDDD" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDDDDDDD" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDDDDDDD" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDDDDDDD" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDDDDDDD" />
          <MessageMe text="XDDDDDDDDDDDDDDDDDDDDDDDDD" />
        </div>
    );
  }
}

export default messangerChat;
