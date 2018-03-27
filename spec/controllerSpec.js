'use strict';

var app = require('..');
var mongoose = require('mongoose');
var request = require('supertest')(app);
var User = require('../server/models/user.model');
var Activity = require('../server/models/activity.model');

describe('Controllers', function() {
    beforeEach(function(done) {
      User.remove({}, function(err) {}).then(function() {
        var user = new User();
        user.username = 'sade';
        user.password = 'sade';
        user.save(function(err, user) {
          if (err) {
            return err;
          }

          process.env.user_id = user._id;
          Activity.create({name: 'Clicked on start'}, (err, activity) => {
            if (err) {
              return err;
            }

            user.addActivity(activity._id, (err, response) => {
              if (err) {
                return err;
              }

              return response;
            })
          })
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
      .post('/api/v1/login')
      .send(logindetails)
      .expect(200)
      .end((err, res) => {
        var body = res.body.message;
        expect(err).toBeNull();
        expect(body).not.toBeNull();
        expect(body).toEqual('You are logged in');
        done();
      });
  });

    it('should create activity', function(done) {
      var activity = {
        name: 'Clicked on Alibaba',
        id: process.env.user_id
      };
      
      request
        .post('/api/v1/activities/create')
        .send(activity)
        .expect(200)
        .end((err, res) => {
          var body = res.body;
          expect(err).toBeNull();
          expect(body).not.toBeNull();
          done();
        });
    });

    it('should fetch all activities', function(done) {
     
      request
        .get(`/api/v1/activities/${process.env.user_id}`)
        .expect(200)
        .end((err, res) => {
          var activities = res.body.activities;
          expect(err).toBeNull();
          expect(activities).not.toBeNull();
          expect(activities.length).toEqual(1);
          done();
        });
    });

  })

