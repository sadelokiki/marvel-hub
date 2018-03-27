const Activity = require('../models/activity.model');
const User = require('../models/user.model');

module.exports = {
  createActivity: (req, res) => {
    User.findOne({_id: req.body.id}, (err, user) => {
      if (err) {
        return res.status(400).json(err);
      }
  
      Activity.create({name: req.body.activity}, (err, activity) => {
        if (err) {
          return res.status(400).json(err);
        }

        user.addActivity(activity._id, (err, response) => {
          if(err) {
            return res.status(400).json(err);
          }
          return res.status(200).json(response)
        });
      });
    });
  },
  
  fetchUserActivities: (req, res) => {
    User.findOne({_id: req.params.id})
      .populate('activities')
      .exec((err, activities) => {
        if(err) {
          return res.status(400).json(err);
        }
        return res.status(200).json(activities);
      });
    }
}
