import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './messangerProfileTop.css';

class messangerProfileTop extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    }
  }

  handleBtnClick = () => {
    this.setState({
      active: true
    })
  }

  handleClickOutside = () => {
    if (this.state.active) {
      this.setState({
        active: false
      });
    }
  }

  handleRemoveChat = () => {
    this.props.socket.emit('removeChat', this.props.activeChat);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
  }

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
              <div className={this.state.active ? "messanger__profileTop--menu active" : 'messanger__profileTop--menu'}>
                <ul className="profileTop__menu--list">
                  <li className="profileTop__menu--item">
                    <Link className="profileTop__menu--link" to={`/profiles/${activeChat}`}>Go to profile</Link>
                  </li>
                  <li className="profileTop__menu--item">
                    <button onClick={this.handleRemoveChat} className="profileTop__menu--btn">Remove chat</button>
                  </li>
                </ul>
              </div>
              <button onClick={this.handleBtnClick} className="messanger__profileTop--bars">
                <span className="fas fa-ellipsis-v"></span>
              </button>
            </div>
        </div>
    );
  }
}

export default messangerProfileTop;
