import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import socket from '../../socket/socket';

import './nav.css';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            profiles: '',
            chat: '',
            settings: ''
        }
    }

    componentDidMount() {
        let link = this.props.location.pathname.split('/')[1];
        this.setState({ [link]: 'active' });
        socket.on('redirectToChat', () => {
            document.querySelector('.nav__menu--item.active').classList.remove('active');
            this.setState({
                profiles: '',
                chat: 'active',
                settings: ''
            })
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.token !== nextProps.token) {
            let link = this.props.location.pathname.split('/')[1];
            this.setState({ [link]: 'active' });
        }
    }

    handleNavClick = e => {
        e.preventDefault();
        this.setState({
            profiles: '',
            chat: '',
            settings: ''
        })
        document.querySelector('.nav__menu--item.active').classList.remove('active');
        if (e.target.nodeName === 'SPAN') {
            let link = e.target.parentNode.href.split('/')[3];
            this.props.history.push('/'+link);
            e.target.parentNode.parentNode.classList.add('active');
        } else {
            let link = e.target.href.split('/')[3];
            this.props.history.push('/'+link);
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
                    <li className={"nav__menu--item "+this.state.profiles}>
                        <Link onClick={this.handleNavClick} to="/profiles" className="nav__menu--link">
                            <span className="far fa-user"></span>
                        </Link>
                    </li>
                    <li className={"nav__menu--item "+this.state.chat}>
                        <Link onClick={this.handleNavClick} to="/chat" className="nav__menu--link">
                            <span className="far fa-comments"></span>
                        </Link>
                    </li>
                    <li className={"nav__menu--item "+this.state.settings}>
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