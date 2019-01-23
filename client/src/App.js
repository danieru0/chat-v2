import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/nav/nav';
import Chat from './components/chat/chat';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
              <Route path="/chat" component={Chat}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
