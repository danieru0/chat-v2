import React, { Component } from 'react';
import { connect } from 'react-redux';

import socket from '../../socket/socket';

import { getUserChats } from '../../store/actions/socketActions';
import { getSearchProfiles, updateProfile } from '../../store/actions/profileActions';

import './settings.css';

class Settings extends Component {
    constructor() {
        super();
        this.state = {
            avatarFile: null,
            avatarImage: null,
            localization: null,
            description: null
        }
    }

    componentDidMount() {
        this.props.getUserChats(socket);
        this.props.getSearchProfiles(this.props.name, true);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
            this.props.getSearchProfiles(nextProps.name, true);   
        }
    }

    handleFileChange = e => {
        if (e.target.files[0]) {
            this.setState({
                avatarFile: e.target.files[0],
                avatarImage: window.URL.createObjectURL(e.target.files[0])
            });
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSettingsSubmit = e => {
        e.preventDefault();
        if (this.state.avatarFile) {
            const avatarFileFormat = this.state.avatarFile.type.split('/')[1];
            if (avatarFileFormat !== 'jpeg') {
                alert('Only jpg format!');
                return;
            }

            const blob = this.state.avatarFile.slice(0, -1, 'image/png');
            const newFile = new File([blob], this.props.name, { type: 'image/jpeg' });
            const fileData = new FormData();
            fileData.append('avatar', newFile);
            this.props.updateProfile(this.state.localization, this.state.description, fileData);
        } else {
            this.props.updateProfile(this.state.localization, this.state.description);
        }
        
    }

    render() {
        const { profile } = this.props;
        return (
            <div className="settings">
                {
                    profile ? (
                        profile.data.profiles.map((item, i) => {
                            return (
                                <form key={i} className="settings__form" onSubmit={this.handleSettingsSubmit}>
                                    <div className="settings__form--group">
                                        <img className="settings__form--avatar" alt="" src={this.state.avatarImage ? this.state.avatarImage : item.avatar}></img>
                                        <input onChange={this.handleFileChange} className="settings__input--file" type="file" accept="image/*"></input>
                                    </div>
                                    <div className="settings__form--group">
                                        <input onChange={this.handleInputChange} name="localization" defaultValue={item.localization} className="settings__input" placeholder="Localization"></input>
                                    </div>
                                    <div className="settings__form--group">
                                        <textarea onChange={this.handleInputChange} name="description" defaultValue={item.description} className="settings__textarea" placeholder="Description"></textarea>
                                    </div>
                                    <button className="settings__form--btn">Save</button>
                                </form>
                            )
                        })
                    ) : (
                        ''
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.socket.name,
        profile: state.profiles.profilesData
    }
}

export default connect(mapStateToProps, { getUserChats, getSearchProfiles, updateProfile })(Settings);