const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const config = require('../../config/config');
const undefsafe = require('undefsafe');
const bcrypt = require('bcrypt')

module.exports  = {

  signup: (req, res) => {
    let user = req.body;
    let saltRounds = 10;
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(saltRounds));
  
    if ( !req.body.username || !req.body.password ) {
      res.status(401).send({
        success: false,
        message: 'Please fill required fields'
      });
    } else {
      let newUser = new User(user);
      newUser.save((err) => {
        if (err) {
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
  login: (req, res) => {
    User.findOne({
        username: req.body.username
      })
      .select('username password')
      .exec((err, user) => {
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
          if (!validPassword) {
            return res.status(401).send({
              success: false,
              message: 'Invalid Username or Password!'
            });
          } else {
            let token = jwt.sign(user.toJSON(), config.secret, {
              expiresIn: 1440
            });
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
