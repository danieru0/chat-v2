import React, { Component } from 'react';
import SearchFriends from './searchFriends/searchFriends';
import FriendsItem from './friendsItem/friendsItem';

import './friends.css';

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friendsMenuShow: false
    }
  }

  showFriendsMenu = () => {
    this.setState({ friendsMenuShow: !this.state.friendsMenuShow });
  }

  render() {
    const { chats, name, avatars } = this.props;
    let chatArray = [];
    let lastMessage = [];
    if (chats || name || avatars) {
      chats.map(item => {
        lastMessage.push({
          last: item.messages[Object.keys(item.messages)[Object.keys(item.messages).length-1]]
        });
        item.admins.map(item => {
          if (item.username !== name) {
            chatArray.push({
              name: item.username
            })
          }
          return '';
        });
        return '';
      });
    }

    return (
        <>
          <button onClick={this.showFriendsMenu} className={this.state.friendsMenuShow ? "friends__button--mobile active" : "friends__button--mobile"}>
            <span className="fa fa-arrow-right"></span>
          </button>
          <div className={this.state.friendsMenuShow ? "friends active" : "friends"}>
            <SearchFriends />
            {
              chatArray.length !== 0 ? (
                chatArray.map((item, i) => {
                  return (
                    <FriendsItem userLastMessage={lastMessage[i].last.message} key={i} userNick={item.name} userLastMessageTime={lastMessage[i].last.time} userAvatar={
                      avatars.find(el => Object.keys(el).toString() === item.name) ? avatars.find(el => Object.keys(el).toString() === item.name)[item.name] : ''
                    } />
                  )
                })
              ) : (
                ''
              )
            }
          </div>
        </>
    );
  }
}

export default Friends;