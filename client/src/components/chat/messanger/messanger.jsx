import React, { Component } from 'react';
import ProfileTop from './messangerProfileTop/messangerProfileTop';
import MessangerSend from './messangerSend/messangerSend';
import MessangerChat from './messangerChat/messangerChat';

import './messanger.css';

class Messanger extends Component {
  render() {
    return (
        <div className="messanger">
          <ProfileTop />
          <MessangerChat />
          <MessangerSend />
        </div>
    );
  }
}

export default Messanger;