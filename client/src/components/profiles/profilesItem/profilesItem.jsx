import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './profilesItem.css';

class ProfilesItem extends Component {

    render() {
        return (
            <Link to="profiles/dupa" className="profiles__item">
                <img className="profiles__item--avatar" alt="" src="https://www.w3schools.com/howto/img_avatar.png"></img>
                <p className="profiles__item--nick">Irene iwicowi</p>
            </Link>
        );
    }
}

export default ProfilesItem;