const express = require('express');
const  Auth = require('../controllers/auth.controller.js');
const Marvel = require('../controllers/marvel.controller');
const Activity = require('../controllers/activity.controller');
const router = express.Router();


module.exports = function(app) {
  router.route('/signup')
    .post(Auth.signup);

  router.route('/login')
    .post(Auth.login);

  router.route('/characters')
    .get(Marvel.fetchCharacters)

  router.route('/activities/create')
    .post(Activity.createActivity)
  
  router.route('/activities/:id')
    .get(Activity.fetchUserActivities)

  app.use('/api/v1', router)
}