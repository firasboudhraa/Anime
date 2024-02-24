const ReviewModel = require("./review.model");
const AnimeModel = require("../anime/anime.model");
const {sendSuccessfulCreation, sendSuccessfulDeletion, sendSuccessfulUpdate, sendSuccessfulRead } = require("../lib/utility ");

exports.createOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) {throw new Error("NOT_FOUND")} ;
  const review = await ReviewModel.create(req.body);
  anime.reviews.push(review);
  await anime.save();
  return sendSuccessfulCreation(res);
};

exports.deleteOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) {throw new Error("NOT_FOUND")};
  const review = await ReviewModel.findOne({ uid: req.body.uid });
  if (!review) {throw new Error("NOT_FOUND")};
  anime.reviews.pull(review);
  await anime.save();
  await ReviewModel.deleteOne({ uid: req.body.uid });
  return sendSuccessfulDeletion(res , {message : 'deletion successful'});
};

exports.updateOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) {throw new Error("NOT_FOUND")};

  const review = await ReviewModel.updateOne({ uid: req.body.uid }, req.body);
  return sendSuccessfulUpdate(res);
};

exports.readOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) {throw new Error("NOT_FOUND")};

  const review = await ReviewModel.findOne({ uid: req.body.uid });
  if (!review) {throw new Error("NOT_FOUND")};

  return sendSuccessfulRead(res);
};
