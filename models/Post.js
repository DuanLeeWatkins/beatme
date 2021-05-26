const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  bpm: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
