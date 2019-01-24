import React, { Component } from 'react';

import './messangerSend.css';

class messangerSend extends Component {
  render() {
    return (
        <div className="messanger__send">
            <input className="messanger__send--input" type="text" placeholder="Write a message..."></input>
        </div>
    );
  }
}

export default messangerSend;
