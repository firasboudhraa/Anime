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
const animeSchema = new Schema(
  {
    uid: {
      type: String,
    },
    title: {
      type: String,
    },
    synopsis: {
      type: String,
    },
    genre: [
      {
        type: String,
      },
    ],
    aired: {
      type: String,
    },
    episodes: {
      type: Number,
    },
    members: {
      type: Number,
    },
    popularity: {
      type: Number,
    },
    ranked: {
      type: Number,
    },
    score: {
      type: Number,
    },
    img_url: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.models.Anime || mongoose.model("Anime", animeSchema);
