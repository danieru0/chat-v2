import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './searchBar/searchBar';
import ProfilesItem from './profilesItem/profilesItem';

import { getAllProfiles, getSearchProfiles } from '../../store/actions/profileActions';

import './profiles.css';

class Profiles extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: null
        }
    }

    componentDidMount() {
        this.props.getAllProfiles();
    }

    handleProfileSearchInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleProfileSearchSubmit = e => {
        e.preventDefault();
        this.props.getSearchProfiles(this.state.searchValue);
    }

    render() {
        const { profiles } = this.props;
        return (
            <div className="profiles">
                <form onSubmit={this.handleProfileSearchSubmit}>
                    <SearchBar onChange={this.handleProfileSearchInput} />
                </form>
                <div className="profiles__container">
                    <div className="profiles__wrapper">
                        {
                            profiles ? (
                                profiles.data.map((item, i) => {
                                    return (
                                        <ProfilesItem key={i} nick={item.username} avatar={item.avatar} />
                                    )
                                })
                            ) : (
                                ''
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profiles: state.profiles.profilesData
    }
}

export default connect(mapStateToProps, { getAllProfiles, getSearchProfiles })(Profiles);