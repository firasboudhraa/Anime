const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    uid: {
      type: Number,
    },
    profile: {
      type: String,
    },
    anime_uid: {
      type: Number,
    },
    text: {
      type: String,
    },
    score: {
      type: Number,
    },
    scores: [
      {
        type: String,
      },
    ],
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.models.Review || mongoose.model("Review", reviewSchema);
