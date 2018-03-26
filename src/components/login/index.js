import React, { Component } from 'react';
import { Card, Button, Input } from 'semantic-ui-react';
import './style.css';
import Auth from '../../lib/auth';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.username = '';
    this.password = '';
    this.isLogin = Auth.userIsLoggedIn();
  }

  onNameChange(e) {
    this.username = e.target.value
  }

  onPasswordChange(e) {
    this.password = e.target.value
  }

  getLoginCredentials() {
   return {
     username: this.username,
     password: this.password
   }
  }

  onLoginSuccess(res) {
    console.log(res, this.props, 'sdfsdf');
    this.props.history.push(`/home`);
  }

  onLoginFailure(err) {
    console.log('unable to login')
      // notify.show(err.response.data.message, 'error');
  }

  login() {
    let formdata = this.getLoginCredentials()
    if (this.loginCredentialsAreValid()) {
      Auth.logUserIn(formdata, this.props.match.url)
        .then(resp => this.onLoginSuccess.call(this, resp))
        .catch(err => this.onLoginFailure.call(this, err))
    } else {
      //  notify.show('All fields are required', 'error');
    }
  }


  loginCredentialsAreValid() {
    return this.username && this.password;
  }

  onSubmit(e) {
    e.preventDefault();
    this.login();
  }

  goToSignup() {
    this.props.history.push('/signup')
  }

  renderLogin() {
    return (
      <div className="container form-wrapper">
          <div className="card-title">{this.props.match.url === '/signup' ? 'Sign up' : 'Login'}</div>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="block">
                <Input name="username" className="default-input" type="text" placeholder="enter username" onChange={this.onNameChange.bind(this)}/>
            </div>
            <div className="block">
                <Input name="password" className="default-input" type="password" onChange={this.onPasswordChange.bind(this)} placeholder="enter password" />
            </div>
            <div className="center">
                <Button className='green' waves='light'>Login</Button>
            </div>
            <p onClick={this.goToSignup.bind(this)}></p>
          </form>
      </div>
    )
  }

  render() {
    return (
      <div className="">
        {this.renderLogin()}
      </div>
    )
  }

}

