import { routes } from './constants';
import { encrypt } from './util';
import axios from 'axios';
import * as crypto from 'crypto';
const undefsafe = require('undefsafe');

export default class Auth {
  static userIsLoggedIn() {
    return !!localStorage.getItem('user_token');
  }

  static logUserIn(userCredentials, type) {
    let user, token;
      var promise = new Promise((resolve, reject) => {
        var route = (type === '/signup') ? routes.SIGNUP : routes.LOGIN
        axios.post(route, userCredentials).then(response => {
            console.log(response.data);
            localStorage.setItem('user_token', undefsafe(response.data, 'token'));
            localStorage.setItem('user', JSON.stringify(response.data.user));
            resolve(response);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          })
      })
      return promise;
    }

  

  static logUserOut() {
    localStorage.removeItem('user_token')
  }

 }