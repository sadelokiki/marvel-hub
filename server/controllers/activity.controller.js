const Activity = require('../models/activity.model');
const User = require('../models/user.model');

module.exports = {
  createActivity: function(req, res) {
    User.findOne({_id: req.params.id}, function(err, activity) {
      if(err) {
        return res.status(400).json(err);
      }
      var newActivity = {
        name: req.body.name
      }
      Activity.create(req.body, function(err, activity) {
        if(err) {
          return res.status(400).json(err);
        }
        var activityId = activity._id;
        activity.addActivity(activityId, function(err, response) {
          if(err) {
            return res.status(400).json(err);
          }
          return res.status(200).json(response)
        })
      })
    })
  },
  
  fetchUserActivities: function(req, res) {
    User.findOne({_id: req.params.id})
      .populate('activities')
      .exec(function(err, activities) {
        if(err) {
          return res.status(400).json(err);
        }
        console.log(activities, 'activit');
        return res.status(200).json(activities);
      })
  },
}
