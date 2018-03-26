import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import LoginForm from '../components/login';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={ LoginForm }  />
        <Route exact path='/signup' component={ LoginForm }  />
        <Route exact path='/home' component={ Home }  />
      </div>
    )
  }
}