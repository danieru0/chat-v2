import React, { Component } from 'react';
import ProfileTop from './messangerProfileTop/messangerProfileTop';
import MessangerSend from './messangerSend/messangerSend';
import MessangerChat from './messangerChat/messangerChat';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearUserChats } from '../../../store/actions/socketActions';

import './messanger.css';

class Messanger extends Component {

  componentDidMount() {
    this.props.socket.on('chatRemovedByOtherUser', deletedChat => {
      if (window.location.pathname.split('/')[2] === deletedChat) {
        document.querySelector('.messanger__popup').classList.add('active');
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeChat !== this.props.activeChat) {
      document.querySelector('.messanger__popup').classList.remove('active');
    }
  }

  handlePopupClick = e => {
    e.preventDefault();
    this.props.clearUserChats();
    this.props.history.push('/');
  }

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
          <div className="messanger__popup">
            <p className="messanger__popup--text">Chat has been removed by a conversation partner!</p>
            <Link onClick={this.handlePopupClick} to="/" className="messanger__popup--link">okey</Link>
          </div>
          {
            currentChat ? (
              <>
                <ProfileTop socket={this.props.socket} activeChat={activeChat} avatar={
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

export default connect(null, { clearUserChats })(withRouter(Messanger));