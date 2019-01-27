import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/nav/nav';
import Chat from './components/chat/chat';
import Login from './components/auth/login/login';
import Register from './components/auth/register/register';
import Profiles from './components/profiles/profiles';
import ProfilePage from './components/profilePage/profilePage';

import withAuth from './components/hoc/withAuth';
import withoutAuth from './components/hoc/withoutAuth';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
              <Route exact path="/" component={withoutAuth(Login)}/>
              <Route path="/register" component={withoutAuth(Register)}/>
              <Route path="/chat" component={withAuth(Chat)}/>
              <Route path="/profiles/:nick" component={withAuth(ProfilePage)}/>
              <Route path="/profiles" component={withAuth(Profiles)}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;