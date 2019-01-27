import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearchProfiles } from '../../store/actions/profileActions';

import './profilePage.css';

class profilePage extends Component {

    componentDidMount() {
        this.props.getSearchProfiles(this.props.match.params.nick);
    }

    render() {
        const { profiles } = this.props;
        return (
            <div className="profilePage">
                {
                    profiles ? (
                        profiles.data.map((item, i) => {
                            return (
                                <div key={i}>
                                    <img className="profilePage--avatar" alt="" src={item.avatar}></img>
                                    <p className="profilePage--nick">{item.username}</p>
                                    <p className="profilePage--localization">{item.localization}</p>
                                    <p className="profilePage--description">{item.description}</p>
                                    <button className="profilePage--btn">Send message</button>
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