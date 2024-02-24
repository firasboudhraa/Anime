const {
  sendSuccessfulDeletion,
  sendSuccessfulUpdate,
  sendSuccessfulRead,
  sendSuccessfulCreation,
} = require("../lib/utility ");
const AnimeModel = require("./anime.model");

exports.createMany = async (req, res) => {
  const CreatedAnime = await AnimeModel.insertMany(req.body);
  return sendSuccessfulCreation(res);
};

exports.createOne = async (req, res) => {
  const CreatedAnime = await AnimeModel.create(req.body);
  return sendSuccessfulCreation(res, CreatedAnime);
};

exports.deleteManyByUid = async (req, res) => {
  await AnimeModel.deleteMany({ uid: { $in: req.body.uid } });
  return sendSuccessfulDeletion(res);
};

exports.deleteOneByUid = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.uid });
  if (!anime) throw new Error("NOT_FOUND");
  await AnimeModel.deleteOne({ uid: req.body.uid });
  return sendSuccessfulDeletion(res);
};

exports.updateOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.uid });
  if (!anime) throw new Error("NOT_FOUND");
  await AnimeModel.updateOne({ uid: req.body.uid }, req.body);
  return sendSuccessfulUpdate(res);
};

exports.readOne = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.uid })
    .populate({ path: "reviews", options: { sort: { score: -1 } } }).lean();
  if (!anime) throw new Error("NOT_FOUND");

  return sendSuccessfulRead(res,anime);
};

exports.readMany = async (req, res) => {
  const anime = await AnimeModel.find({ uid: { $in: req.body.uid } });
  if (!anime) throw new Error("NOT_FOUND");
  return sendSuccessfulRead(res, anime);
};
