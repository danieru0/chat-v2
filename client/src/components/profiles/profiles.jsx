import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import ProfilesItem from './profilesItem/profilesItem';

import './profiles.css';

class Profiles extends Component {

    render() {
        return (
            <div className="profiles">
                <SearchBar />
                <div className="profiles__container">
                    <div className="profiles__wrapper">
                        <ProfilesItem />
                        <ProfilesItem />
                        <ProfilesItem />
                        <ProfilesItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profiles;