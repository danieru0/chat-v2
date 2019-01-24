import React, { Component } from 'react';

import './searchFriends.css';

class searchFriends extends Component {
  render() {
    return (
        <div className="friends__search">
            <div className="friends__search--wrapper">
                <span className="fas fa-search friends__search--icon"></span>
                <input type="text" placeholder="Search your friends" className="friends__search--input"></input>
            </div>
        </div>
    );
  }
}

export default searchFriends;
