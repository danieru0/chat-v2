import React, { Component } from 'react';

import './searchBar.css';

class searchBar extends Component {

    render() {
        return (
            <div className="profiles__searchBar">
                <input onChange={this.props.onChange} name="searchValue" className="profiles__searchBar--input" type="text" placeholder="Search people..."></input>
            </div>
        );
    }
}

export default searchBar;