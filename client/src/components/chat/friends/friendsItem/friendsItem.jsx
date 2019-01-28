import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './friendsItem.css';

class friendsItem extends Component {
  render() {
    let { userNick, userLastMessage, userLastMessageTime, userAvatar, active } = this.props;
    return (
        <Link to={"/chat/"+userNick} className={active ? "friends__item active" : "friends__item"}>
            <img className="friends__item--avatar" alt="" src={userAvatar}></img>
            <div className="friends__item--content">
                <span className="friends__item--nick">{userNick}</span>
                <span className="friends__item--lastMessage">{userLastMessage}</span>
            </div>
            <span className="friends__item--time">{userLastMessageTime}</span>
        </Link>
    );
  }
}

export default friendsItem;
