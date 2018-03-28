import React, { Component } from 'react';
import './style.css';
import {Button,  Header } from 'semantic-ui-react';
import Auth from '../../lib/auth';

class HeaderComponent extends Component {
  constructor(props, context) {
    super(props, context)
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    console.log(props.match.url, 'in header')
    this.state = {
      path: props.match.url || null
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header as='h3' block>
          <div className="icon">MarvelHub</div>
          <div className="welcome">{this.isLoggedIn() ?  `Welcome ${this.user.username}` : null }</div>
           { this.state.path === '/activities' ? null : <Button onClick={this.gotoActivities.bind(this)}>Activity Log</Button>  }
          <Button onClick={this.logout.bind(this)}>{ this.isLoggedIn() ? 'Logout' : 'Login'}</Button>
        </Header>
      </div>
    )
  }

  gotoActivities() {
    if (this.props.match.url !== '/activities') {
      this.props.history.push('/activities');
    }
  }

  logout() {
    Auth.logUserOut();
    this.props.history.push('/');
  }


  isLoggedIn() {
    if (Auth.userIsLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

}

export default HeaderComponent;