import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkToken } from '../../store/actions/authActions';

export default function withoutAuth(ComponentToCheck) {
    class AuthHoc extends Component {

        componentDidMount() {
            this.props.checkToken();
        }

        render() {
            if (this.props.tokenLoading) {
                return null;
            }

            if (this.props.token) {
                return <Redirect to="/chat"></Redirect>
            }

            return (
                <React.Fragment>
                    <ComponentToCheck {...this.props} />
                </React.Fragment>
            )
        }
    }

    const mapStateToProps = state => {
        return {
            tokenLoading: state.auth.tokenLoading,
            token: state.auth.token
        }
    }

    return connect(mapStateToProps, { checkToken })(AuthHoc);
}