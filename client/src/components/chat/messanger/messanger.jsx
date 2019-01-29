import React, { Component } from 'react';
import ProfileTop from './messangerProfileTop/messangerProfileTop';
import MessangerSend from './messangerSend/messangerSend';
import MessangerChat from './messangerChat/messangerChat';

import './messanger.css';

class Messanger extends Component {
  render() {
    const { activeChat, chats, name, avatars } = this.props;
    let currentChat = '';
    if (chats) {
      chats.map(item => {
        let admins = item.chatName.split('/');
         if (admins[0] === activeChat || admins[0] === name) {
           if (admins[1] === activeChat || admins[1] === name) {
             return (
              currentChat = item
             )  
           }
         }
         return '';
      });
    }

    return (
        <div className="messanger">
        {
          currentChat ? (
            <>
              <ProfileTop activeChat={activeChat} avatar={
                avatars.find(el => Object.keys(el).toString() === activeChat) ? avatars.find(el => Object.keys(el).toString() === activeChat)[activeChat] : ''
              } />
              <MessangerChat activeChat={activeChat} name={this.props.name} socket={this.props.socket} messages={currentChat.messages} />
              <MessangerSend socket={this.props.socket} activeChat={activeChat} />
            </>
          ) : (
            ''
          )
        }
        </div>
    );
  }
}

export default Messanger;