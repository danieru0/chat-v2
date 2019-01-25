import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './register.css';

class Register extends Component {
  render() {
    return (
        <div className="register">
            <form className="register__form">
              <div className="register__input--group">
                <input className="register__input" name="username" type="text" required></input>
                <label className="floating-label" htmlFor="username">Your new nick</label>
              </div>
              <div className="register__input--group">
                <input className="register__input" name="password-first" type="password" required></input>
                <label className="floating-label" htmlFor="password-first">Your new password</label>
              </div>
              <div className="register__input--group">
                <input className="register__input" name="password-repeat" type="password" required></input>
                <label className="floating-label" htmlFor="password-repeat">Repeat your new password</label>
              </div>
              <button className="register__button">Register</button>
              <Link to="/" className="register__link">Login</Link>
            </form>
        </div>
    );
  }
}

export default Register;