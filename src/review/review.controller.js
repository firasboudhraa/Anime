const ReviewModel = require("./review.model");
const AnimeModel = require("../anime/anime.model");

exports.createOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) return res.sendStatus(404);
  const review = await ReviewModel.create(req.body);
  anime.reviews.push(review);
  await anime.save();
  return res.sendStatus(201);
};

exports.deleteOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) return res.sendStatus(404);
  const review = await ReviewModel.findOne({ uid: req.body.uid });
  if (!review) return res.sendStatus(404);
  anime.reviews.pull(review);
  await anime.save();
  await ReviewModel.deleteOne({ uid: req.body.uid });
  return res.sendStatus(201);
};

exports.updateOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) return res.sendStatus(404);

  const review = await ReviewModel.updateOne({ uid: req.body.uid }, req.body);
  return res.sendStatus(200);
};

exports.readOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) return res.status(404).json({ message: 'Anime not found' });

  const review = await ReviewModel.findOne({ uid: req.body.uid });
  if (!review) return res.status(404).json({ message: 'Review not found' });

  return res.status(200).json(review);
};
