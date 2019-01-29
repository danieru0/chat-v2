import React, { Component } from 'react';
import Friends from './friends/friends';
import Messanger from './messanger/messanger';
import { connect } from 'react-redux';

import { getUserChats } from '../../store/actions/socketActions';

import socket from '../../socket/socket';

import './chat.css';

class Chat extends Component {
  componentDidMount() {
    socket.connect();
    this.props.getUserChats(socket);
  }

  render() {
    return (
        <div className="chat">
            <Friends avatars={this.props.avatars} chats={this.props.chats} name={this.props.name} />
            <Messanger socket={socket} name={this.props.name} avatars={this.props.avatars} chats={this.props.chats} activeChat={this.props.match.params.nick} />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chats: state.socket.chats,
    name: state.socket.name,
    avatars: state.socket.avatars
  }
}

export default connect(mapStateToProps, { getUserChats })(Chat);