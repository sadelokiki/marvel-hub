var express = require('express');
    router = express.Router(),
   Auth = require('../controllers/auth.controller.js');
   Marvel = require('../controllers/marvel.controller');



module.exports = function(app) {
  router.route('/signup')
    .post(Auth.signup);

  router.route('/login')
    .post(Auth.login);

  router.route('/characters')
    .get(Marvel.fetchCharacters)

  app.use('/api/v1', router)
}