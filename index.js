var port = 3001
var app = require('./config/express')();


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('App starting on port 3001');
})
