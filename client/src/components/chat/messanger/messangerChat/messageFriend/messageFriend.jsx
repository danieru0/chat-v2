import React, { Component } from 'react';

import './messageFriend.css';

class messageFriend extends Component {
  render() {
    const { text } = this.props;
    return (
        <div className="chat__message-friend">
            <p>{text}</p>
        </div>
    );
  }
}

export default messageFriend;