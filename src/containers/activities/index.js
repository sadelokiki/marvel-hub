import React, { Component } from 'react';
import HeaderComponent from '../../components/header';
import { connectToStore } from '../../lib/util';
import Activities from '../../components/activities';
import { Redirect } from 'react-router-dom';
import Auth from '../../lib/auth';

class Home extends Component {

  render() {
    return (
      <div className="page-wrapper">
        <HeaderComponent {...this.props} />
        { this.isLoggedIn() ? <Activities {...this.props } />  : <Redirect to='/'/>}
      </div>
    )
  }

  isLoggedIn() {
    if (Auth.userIsLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}


export default connectToStore(Home);