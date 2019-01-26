import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './nav.css';

class Nav extends Component {

    handleNavClick = e => {
        e.preventDefault();
        document.querySelector('.nav__menu--item.active').classList.remove('active');
        if (e.target.nodeName === 'SPAN') {
            let link = e.target.parentNode.href.split('/')[3];
            this.props.history.push(link);
            e.target.parentNode.parentNode.classList.add('active');
        } else {
            let link = e.target.href.split('/')[3];
            this.props.history.push(link);
            e.target.parentNode.classList.add('active');
        }
    }

    render() {
        if (!this.props.token) {
            return null;
        }
        return (
            <nav className="nav">
                <ul className="nav__menu">
                    <li className="nav__menu--item">
                        <Link onClick={this.handleNavClick} to="/profiles" className="nav__menu--link">
                            <span className="far fa-user"></span>
                        </Link>
                    </li>
                    <li className="nav__menu--item active">
                        <Link onClick={this.handleNavClick} to="/chat" className="nav__menu--link">
                            <span className="far fa-comments"></span>
                        </Link>
                    </li>
                    <li className="nav__menu--item">
                        <Link onClick={this.handleNavClick} to="/settings" className="nav__menu--link">
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

export default connect(mapStateToProps, null)(withRouter(Nav));