import React, { Component } from 'react';

import './messangerProfileTop.css';

class messangerProfileTop extends Component {
  render() {
    const { avatar, activeChat } = this.props;
    return (
        <div className="messanger__profileTop">
            <div className="messanger__profileTop--info">
              <img className="messanger__profileTop--avatar" alt="" src={avatar}></img>
              <div className="messanger__profileTop--content">
                <span className="messanger__profileTop--nick">{activeChat}</span>
              </div>
            </div>
            <div className="messanger__profileTop--settings">
              <button className="messanger__profileTop--bars">
                <span className="fas fa-ellipsis-v"></span>
              </button>
            </div>
        </div>
    );
  }
}

export default messangerProfileTop;
