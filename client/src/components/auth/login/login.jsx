import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './login.css';

class Login extends Component {
  render() {
    return (
        <div className="login">
            <form className="login__form">
              <div className="login__input--group">
                <input className="login__input" name="username" type="text" required></input>
                <label className="floating-label" htmlFor="username">Your nick</label>
              </div>
              <div className="login__input--group">
                <input className="login__input" name="password" type="password" required></input>
                <label className="floating-label" htmlFor="password">Your password</label>
              </div>
              <button className="login__button">Log in</button>
              <Link to="/register" className="login__link">Register</Link>
            </form>
        </div>
    );
  }
}

export default Login;