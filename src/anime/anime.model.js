const mongoose = require("mongoose");

const { Schema } = mongoose;
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
