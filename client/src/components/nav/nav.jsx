import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

class Nav extends Component {
  render() {
    return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu--item">
                    <Link to="/users" className="nav__menu--link">
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

export default Nav;
