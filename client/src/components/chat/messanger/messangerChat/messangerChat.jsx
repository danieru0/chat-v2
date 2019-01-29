import React, { Component } from 'react';
import MessageMe from './messageMe/messageMe';
import MessageFriend from './messageFriend/messageFriend';

import socket from '../../../../socket/socket';

import './messangerChat.css';

class messangerChat extends Component {
  constructor() {
    super();
    this.state = {
      messagesFromSocket: []
    }
  }

  componentDidMount() {
    let chatElement = document.getElementById('messanger-chat');
    chatElement.scrollTop = chatElement.scrollHeight;
    socket.on('receiveChatMessage', (message, username) => {
      let newMessage = {
        message: message,
        username: username
      }
      this.setState({
        messagesFromSocket: [...this.state.messagesFromSocket, newMessage]
      })
    })
  }

  componentDidUpdate() {
    let chatElement = document.getElementById('messanger-chat');
    chatElement.scrollTop = chatElement.scrollHeight;
  }

  render() {
    let { messages, name } = this.props;
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
          {
            this.state.messagesFromSocket.length !== 0 ? (
              this.state.messagesFromSocket.map((item, i) => {
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
