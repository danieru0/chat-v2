import React, { Component } from 'react';

import './searchFriends.css';

class searchFriends extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: null
        }
    }

    handleSearchChatsInput = e => {
        this.setState({
            searchInput: e.target.value
        })
    }

    render() {
        return (
            <div className="friends__search">
                <form onSubmit={(e) => this.props.onSubmit(e, this.state.searchInput)} className="friends__search--wrapper">
                    <span className="fas fa-search friends__search--icon"></span>
                    <input onChange={this.handleSearchChatsInput} type="text" placeholder="Search your chats" className="friends__search--input"></input>
                </form>
            </div>
        );
    }
}

export default searchFriends;
