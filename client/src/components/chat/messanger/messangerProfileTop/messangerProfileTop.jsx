import React, { Component } from 'react';

import './messangerProfileTop.css';

class messangerProfileTop extends Component {
  render() {
    return (
        <div className="messanger__profileTop">
            <div className="messanger__profileTop--info">
              <img className="messanger__profileTop--avatar" alt="" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Avatar_2_Placeholder_DumDarac.png"></img>
              <div className="messanger__profileTop--content">
                <span className="messanger__profileTop--nick">Irene Williams</span>
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
