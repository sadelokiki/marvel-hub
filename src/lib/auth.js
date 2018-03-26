import { routes } from './constants';
import axios from 'axios';

export default class Auth {
  static userIsLoggedIn() {
    return !!localStorage.getItem('user_token');
  }

  static logUserIn(userCredentials, type) {
      var promise = new Promise((resolve, reject) => {
        var route = (type === '/signup') ? routes.SIGNUP : routes.LOGIN
        axios.post(route, userCredentials).then(response => {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('user_token', response.data.token);
            resolve(response);
          })
          .catch(err => {
            reject(err);
          })
      })
      return promise;
    }

  

  static logUserOut() {
    localStorage.removeItem('user_token')
  }

 }