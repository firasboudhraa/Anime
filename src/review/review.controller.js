const ReviewModel = require("./review.model");
const AnimeModel = require("../anime/anime.model");


exports.createOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) return res.sendStatus(404);
  const review = await ReviewModel.create(req.body);
  anime.reviews.push(review)
  await anime.save()
  return res.sendStatus(201);
};

