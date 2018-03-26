import React, { Component } from 'react';
import { connectToStore } from '../../lib/util';
import Auth from '../../lib/auth';
import LoginForm from '../../components/login';
import HeaderComponent from '../../components/header';
import './style.css';

class Login extends Component{

  
  render() {
    return (
      <div>
        <NavbarSection />
        <Notifications />
        <div className="signup-wrapper valign-wrapper">
          <div className="valign block-width">
            <LoginForm {...this.props}/>
          </div>
        </div>
      </div>
      )
  }
}

export default connectToStore(Login);