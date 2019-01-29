import React, { Component } from 'react';
import { connect } from 'react-redux';

import socket from '../../socket/socket';

import { getSearchProfiles } from '../../store/actions/profileActions';

import './profilePage.css';

class profilePage extends Component {

    componentDidMount() {
        this.props.getSearchProfiles(this.props.match.params.nick);
    }

    handleSendButton = e => {
        socket.emit('createNewChat', e.target.dataset.nick);
    }

    render() {
        const { profiles } = this.props;
        return (
            <div className="profilePage">
                {
                    profiles ? (
                        profiles.data.profiles.map((item, i) => {
                            return (
                                <div key={i}>
                                    <img className="profilePage--avatar" alt="" src={item.avatar}></img>
                                    <p className="profilePage--nick">{item.username}</p>
                                    <p className="profilePage--localization">{item.localization}</p>
                                    <p className="profilePage--description">{item.description}</p>
                                    {
                                        profiles.data.username !== item.username ? (
                                            <button data-nick={item.username} onClick={this.handleSendButton} className="profilePage--btn">Send message</button>
                                        ) : (
                                            ''
                                        )
                                    }
                                </div>
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
        profiles: state.profiles.profilesData
    }
}

export default connect(mapStateToProps, { getSearchProfiles })(profilePage);