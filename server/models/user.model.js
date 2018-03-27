const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  activities: [{type: Schema.Types.ObjectId, ref: 'activities'}]
})

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.addActivity = function(activityId, cb) {
  var activities = this.activities;
  if (activities.indexOf(activityId) < 0) {
    this.activities.push(activityId);
    this.save(cb);
  } else {
    return cb;
  }
};

module.exports = mongoose.model('users', userSchema);