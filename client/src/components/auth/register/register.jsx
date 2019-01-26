import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './register.css';

class Register extends Component {

  componentDidMount() {
    /*axios.post('/api/register', {
      username: 'bonk',
      password: 'siema'
    }).then(resp => {
      console.log(resp);
    })*/
    /*axios.post('/api/login', {
      username: 'bonk',
      password: 'siema'
    }).then(resp => {
      console.log(resp);
    })*/

    axios.get('/api/checkToken').then(resp => console.log(resp));
  }

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