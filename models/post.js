const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
