import React, { Component } from 'react';
import { Button, Input, Form, Segment } from 'semantic-ui-react';
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
    this.props.history.push(`/home`);
  }

  onLoginFailure(err) {
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

  gotoLogin() {
    this.props.history.push('/')
  }

  renderLogin() {
    return (
      <div className="container form-wrapper">
          <h3 className="card-title">{this.props.match.url === '/signup' ? 'Sign up' : 'Login'}</h3>
          <Segment inverted>
          <Form inverted onSubmit={this.onSubmit.bind(this)}>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Username' placeholder='Username' onChange={this.onNameChange.bind(this)} />
              <Form.Input type="password" fluid label='Password' placeholder='Password' onChange={this.onPasswordChange.bind(this)}/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
           {this.props.match.url === '/signup' ? 
            <div>Already registered?<p className="reg-link" onClick={this.gotoLogin.bind(this)}>Login</p></div> : 
            <div>Not registered?<p className="reg-link" onClick={this.goToSignup.bind(this)}>Signup</p></div> }
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

