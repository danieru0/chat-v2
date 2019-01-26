import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './profilesItem.css';

class ProfilesItem extends Component {

    render() {
        const { nick, avatar } = this.props;
        return (
            <Link to={"profiles/"+nick} className="profiles__item">
                <img className="profiles__item--avatar" alt="" src={avatar}></img>
                <p className="profiles__item--nick">{nick}</p>
            </Link>
        );
    }
}

export default ProfilesItem;