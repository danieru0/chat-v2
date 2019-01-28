import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sendChatMessage } from '../../../../store/actions/socketActions';

import './messangerSend.css';

class messangerSend extends Component {
  constructor() {
    super();
    this.state = {
      message: null
    }
  }

  handleSendInputChange = e => {
    this.setState({ message: e.target.value })
  }

  handleSendSubmit = e => {
    e.preventDefault();
    this.props.sendChatMessage(this.props.socket, this.props.activeChat, this.state.message);
  }

  render() {
    return (
        <div className="messanger__send">
            <form onSubmit={this.handleSendSubmit} className="messanger__send--form">
              <input onChange={this.handleSendInputChange} className="messanger__send--input" type="text" placeholder="Write a message..."></input>
            </form>
        </div>
    );
  }
}

export default connect(null, { sendChatMessage })(messangerSend);
