var express = require('express');
    router = express.Router(),
   Auth = require('../controllers/auth.controller.js');
   Marvel = require('../controllers/marvel.controller');
   Activity = require('../controllers/activity.controller');


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