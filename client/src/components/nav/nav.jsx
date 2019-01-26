import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './nav.css';

class Nav extends Component {
  render() {
    if (!this.props.token) {
        return null;
    }
    return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu--item">
                    <Link to="/profiles" className="nav__menu--link">
                        <span className="far fa-user"></span>
                    </Link>
                </li>
                <li className="nav__menu--item active">
                    <Link to="/chat" className="nav__menu--link">
                        <span className="far fa-comments"></span>
                    </Link>
                </li>
                <li className="nav__menu--item">
                    <Link to="/settings" className="nav__menu--link">
                        <span className="fa fa-cog"></span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
  }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps, null)(Nav);