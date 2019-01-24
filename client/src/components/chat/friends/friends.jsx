import React, { Component } from 'react';
import SearchFriends from './searchFriends/searchFriends';
import FriendsItem from './friendsItem/friendsItem';

import './friends.css';

class Friends extends Component {
  render() {
    return (
        <div className="friends">
            <SearchFriends />
            <FriendsItem userNick="Anfisa Novikova" userLastMessage="I really like the colour but can you change it to be..." userLastMessageTime="11:39" userAvatar="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397_960_720.png" />
            <FriendsItem userNick="Kent Smith" userLastMessage="Use what happens naturally." userLastMessageTime="10:15" userAvatar="https://www.w3schools.com/howto/img_avatar.png" />
            <FriendsItem active={true} userNick="Irene Williams" userLastMessage="Is this the best we can do?" userLastMessageTime="09:52" userAvatar="https://upload.wikimedia.org/wikipedia/commons/c/c9/Avatar_2_Placeholder_DumDarac.png" />
            <FriendsItem userNick="Dana Medina" userLastMessage="In an ideal world that sandwitch" userLastMessageTime="Yesterday" userAvatar="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg" />
        </div>
    );
  }
}

export default Friends;