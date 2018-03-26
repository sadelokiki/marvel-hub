const mongoose = require('mongoose');
    Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

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

// userSchema.pre("save", (next) => {
//   const user = this;
//   console.log(user, 'in model');
//   const saltRounds = 10;
//   bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(user.password, salt, function(err, hash) {
//         // Store hash in your password DB.
//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//     });
//   });
// });

userSchema.methods.comparePassword = function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
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