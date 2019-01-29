import React, { Component } from 'react';
import MessageMe from './messageMe/messageMe';
import MessageFriend from './messageFriend/messageFriend';

import './messangerChat.css';

class messangerChat extends Component {

  componentDidMount() {
    let chatElement = document.getElementById('messanger-chat');
    chatElement.scrollTop = chatElement.scrollHeight;
  }

  componentDidUpdate() {
    let chatElement = document.getElementById('messanger-chat');
    chatElement.scrollTop = chatElement.scrollHeight;
  }

  render() {
    const { messages, name } = this.props;
    return (
        <div id="messanger-chat" className="messanger__chat">
          {
            messages.length !== 0 ? (
              messages.map((item, i) => {
                return (
                  item.username === name ? (
                    <MessageMe key={i} text={item.message} /> 
                  ) : (
                    <MessageFriend key={i} text={item.message} />
                  )
                )
              })
            ) : (
              ''
            )
          }
        </div>
    );
  }
}

export default messangerChat;
