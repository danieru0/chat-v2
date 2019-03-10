import React, { Component } from 'react';

import './messageMe.css';

class MessageMe extends Component {
  render() {
    let { text } = this.props;
    let regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    let match = text.match(regExp);
    return (
        <div className="chat__message-me">
          {
            match ? (
              <iframe className="chat__message-me--iframe" title={text} src={'https://www.youtube.com/embed/'+match[1]} frameBorder="0" allow="accelerometer" allowFullScreen></iframe>
            ) : (
              <p>{text}</p>
            )
          }
        </div>
    );
  }
}

export default MessageMe;