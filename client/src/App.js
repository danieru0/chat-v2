import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/nav/nav';
import Chat from './components/chat/chat';
import Login from './components/auth/login/login';
import Register from './components/auth/register/register';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/chat" component={Chat}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
