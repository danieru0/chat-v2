import React, { Component } from 'react';
import ProfileTop from './messangerProfileTop/messangerProfileTop';
import MessangerSend from './messangerSend/messangerSend';
import MessangerChat from './messangerChat/messangerChat';

import './messanger.css';

class Messanger extends Component {
  render() {
    const { activeChat, chats, name } = this.props;
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
              <ProfileTop />
              <MessangerChat messages={currentChat.messages} />
              <MessangerSend />
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