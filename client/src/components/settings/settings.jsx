import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getUserChats } from '../../store/actions/socketActions';

import socket from '../../socket/socket';

import './settings.css';

class Settings extends Component {
    constructor() {
        super();
        this.state = {
            file: null
        }
    }

    componentDidMount() {
        this.props.getUserChats(socket);
    }

    handleFileChange = e => {
        this.setState({
            file: e.target.files[0]
        })
    }

    handleSettingsSubmit = e => {
        e.preventDefault();
        let blob = this.state.file.slice(0, -1, 'image/png');
        let newFile = new File([blob], this.props.name, {type: 'image/png'});
        let fileData = new FormData();
        fileData.append('avatar', newFile);
        axios.post('/api/profiles/uploadAvatar', fileData).then(resp => {
            console.log(resp);
        })
    }

    render() {
        return (
            <div className="settings">
                <form onSubmit={this.handleSettingsSubmit}>
                    <input onChange={this.handleFileChange} type="file" accept="image/*"></input>
                    <button>accept</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.socket.name
    }
}

export default connect(mapStateToProps, { getUserChats })(Settings);