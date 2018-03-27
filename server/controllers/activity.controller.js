const Activity = require('../models/activity.model');
const User = require('../models/user.model');

module.exports = {
  createActivity: function(req, res) {
    User.findOne({_id: req.body.id}, function(err, user) {
      if (err) {
        return res.status(400).json(err);
      }
  
      Activity.create({name: req.body.activity}, function(err, activity) {
        if (err) {
          return res.status(400).json(err);
        }

        user.addActivity(activity._id, function(err, response) {
          if(err) {
            return res.status(400).json(err);
          }
          return res.status(200).json(response)
        });
      });
    });
  },
  
  fetchUserActivities: function(req, res) {
    User.findOne({_id: req.params.id})
      .populate('activities')
      .exec(function(err, activities) {
        if(err) {
          return res.status(400).json(err);
        }
        return res.status(200).json(activities);
      });
  }
}
