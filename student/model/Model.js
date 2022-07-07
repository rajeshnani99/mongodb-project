const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  studentFirstName: {
    type: String,
    required: true,
    unique:true
  },
  collegeName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PostModel", PostSchema);