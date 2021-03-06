import React, { Component } from 'react';
import HeaderComponent from '../../components/header';
import { connectToStore } from '../../lib/util';
import Characterlist from '../../components/home';
import { Redirect } from 'react-router-dom';
import Auth from '../../lib/auth';
import './style.css';

class Home extends Component {
  
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    return (
      <div className="page-wrapper">
        <HeaderComponent {...this.props} />
        { this.isLoggedIn() ? ( this.props.characters ? <Characterlist {...this.props } /> : 'Loading charactes...' ) : <Redirect to='/'/>}
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