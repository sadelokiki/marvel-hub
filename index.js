var express = require('express');
const port = 3001

var app = require('./config/express')(express());

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
  
    console.log('App starting on port', port);
  });
}

module.exports = app;