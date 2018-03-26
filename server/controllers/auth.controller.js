const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const config = require('../../config/config');
const undefsafe = require('undefsafe');
const bcrypt = require('bcrypt')



module.exports  = {
  // function to generate password
generatePassword: function() {
  let passLength = 8;
  let alphaNum = '0123456789abcdefghijklnopqrstuvwxyz' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$^&%*()+=-[]{}|:<>?,.';
  let password = '';
  for (let i = 0; i < passLength; ++i) {
    password += alphaNum.charAt(Math.floor(
      Math.random() * alphaNum.length));
  }
  return password;
},

//signup a new user
  signup: function(req, res) {
    let user = req.body;
    console.log(user, 'req from client')
    let saltRounds = 10;
    var salt = bcrypt.genSaltSync(saltRounds);
    user.password = bcrypt.hashSync(user.password, salt);
  
    if ( !req.body.username || !req.body.password ) {
      res.status(401).send({
        success: false,
        message: 'Please fill required fields'
      });
    } else {
      let newUser = new User(user);
      console.log('new user:: ', newUser);
      newUser.save(function(err) {
        if (err) {
          console.log(err);
          if (err.code === 11000) {
            return res.status(401).send({
              success: false,
              message: 'Username already exists!'
            });
          } else {
            return res.status(401).send(err);
          }
        } else {
          let token = jwt.sign(newUser.toJSON(), config.secret, {
            expiresIn: 1440
          });
          res.send({
            success: true,
            message: 'Account created!',
            token: token,
            user: newUser
          });
        }
      });
    }
  },

  //login a user
  login: function(req, res) {
    User.findOne({
        username: req.body.username
      })
      .select('username password')
      .exec(function(err, user) {
        if (err) {
          throw err;
        }
        if (!user) {
          return res.status(401).send({
            success: false,
            message: 'Invalid Username or Password!'
          });
        } else {
          let validPassword = user.comparePassword(req.body.password);
          console.log(validPassword, 'valiid')
          console.log(validPassword, 'statin contorller')
          if (!validPassword) {
            return res.status(401).send({
              success: false,
              message: 'Invalid Username or Password!'
            });
          } else {
            console.log(config.secret, 'dkfnklsndf')
            let token = jwt.sign(user.toJSON(), config.secret, {
              expiresIn: 1440
            });
            console.log(token, 'tokeeen')
            res.send({
              success: true,
              message: 'You are logged in',
              token: token,
              user: user
            });
          }
        }
      });
  }
}
