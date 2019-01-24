import React, { Component } from 'react';

import './messageMe.css';

class MessageMe extends Component {
  render() {
    const { text } = this.props;
    return (
        <div className="chat__message-me">
          <p>{text}</p>
        </div>
    );
  }
}

export default MessageMe;