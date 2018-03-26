'use strict';
var app = require('../index.js.js');
var mongoose = require('mongoose');
var request = require('supertest')(app);
var User = mongoose.model('User'),
  Activity = mongoose.model('Document');

describe('User Routes', function() {

  beforeEach(function(done) {
    User.remove({}, function(err) {}).then(function() {
      var user = new User();
      user.username = 'sade';
      user.email = 'sade@gmail.com';
      user.setPassword('sade');
      user.save(function(err, users) {
        if (err) {
          return err;
        }
        done();
      });
    });
  });

  afterEach(function(done) {
    User.remove({}, function(err) {
      if (err) {
        return err;
      }
      done();
    });
  });

  it('should test POST method for /users/login', function(done) {
    var logindetails = {
      username: 'sade',
      password: 'sade'
    };
    request
      .post('/')
      .send(logindetails)
      .expect(200)
      .end(function(err, res) {
        expect(err).toBeNull();
        expect(res.body).not.toBeNull();
        done();
      });
  });

  it('should test POST method for signup', function(done) {
    request
      .post('/signup')
      .set('Content-Type', 'application/json')
      .send({
        username: 'tade',
        password: 'tade'
      })
      .end(function(err, res) {
        request
          .post('/signup')
          .set('Content-Type', 'application/json')
          .end(function(err, res) {
            expect(err).toBeNull();
            expect(res.body).not.toBeNull();
            expect(res.body).toEqual(jasmine.objectContaining({
              success: true,
              message: 'Account created'
            }));
            done();
          });
      });
  });



});