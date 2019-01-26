import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../../../store/actions/authActions';

import './register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      passwordFirst: null,
      passwordRepeat: null
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleRegisterSubmit = e => {
    e.preventDefault();
    if (this.state.passwordFirst === this.state.passwordRepeat) {
      this.props.register({
        username: this.state.username,
        password: this.state.passwordFirst
      })
    }
  }

  render() {
    if (this.props.registerSuccess) {
      return <Redirect to="/"></Redirect>
    }
    return (
        <div className="register">
            <form onSubmit={this.handleRegisterSubmit} className="register__form">
              <div className="register__input--group">
                <input onChange={this.handleInputChange} className="register__input" name="username" type="text" required></input>
                <label className="floating-label" htmlFor="username">Your new nick</label>
              </div>
              <div className="register__input--group">
                <input onChange={this.handleInputChange} className="register__input" name="passwordFirst" type="password" required></input>
                <label className="floating-label" htmlFor="passwordFirst">Your new password</label>
              </div>
              <div className="register__input--group">
                <input onChange={this.handleInputChange} className="register__input" name="passwordRepeat" type="password" required></input>
                <label className="floating-label" htmlFor="passwordRepeat">Repeat your new password</label>
              </div>
              <button className="register__button">Register</button>
              <Link to="/" className="register__link">Login</Link>
            </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerSuccess: state.auth.registerSuccess
  }
}

export default connect(mapStateToProps, { register })(Register);