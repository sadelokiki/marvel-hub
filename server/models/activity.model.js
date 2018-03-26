const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: {
    type: String
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: {createdAt: "createdAt" } });

module.exports = mongoose.model("Activity", eventSchema);