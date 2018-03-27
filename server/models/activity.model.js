const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: {
    type: String
  },
  user: {type: Schema.Types.ObjectId, ref: 'users'}
}, { 
  timestamps: {createdAt: "createdAt" } 
});

module.exports = mongoose.model("activities", activitySchema);