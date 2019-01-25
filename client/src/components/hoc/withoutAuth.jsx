import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function withoutAuth(ComponentToCheck) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false
            }
        }

        componentDidMount() {
            axios.get('/api/checkToken').then(resp => {
                if (resp.status === 200) {
                    this.setState({ loading: false, redirect: true });
                } else {
                    const error = new Error(resp.error);
                    throw error;
                }
            }).catch(() => {
                this.setState({ loading: false });
            });
        }

        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/chat"></Redirect>
            }
            return (
                <React.Fragment>
                    <ComponentToCheck {...this.props} />
                </React.Fragment>
            )
        }
    }
}