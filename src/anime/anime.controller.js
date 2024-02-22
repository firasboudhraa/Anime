const AnimeModel = require("./anime.model");

exports.createMany = async (req, res) => {
  const CreatedAnime = await AnimeModel.createMany(req.body);
  return res.sendStatus(201).json(CreatedAnime);
};

exports.createOne = async (req, res) => {
  await AnimeModel.create(req.body);
  return res.sendStatus(201);
};

exports.deleteManyByUid = async (req, res) => {
  await AnimeModel.deleteMany({ uid: { $in: req.body.uid } });
  return res.sendStatus(204);
};
exports.deleteOneByUid = async (req, res) => {
  await AnimeModel.deleteOne({ uid: req.body.uid });
  return res.sendStatus(204);
};

exports.updateOne = async (req, res) => {
  await AnimeModel.updateOne({ uid: req.body.uid }, req.body);
  return res.sendStatus(200);
};

exports.updateMany = async (req, res) => {
  const updatedAnime = await AnimeModel.updateMany(
    { uid: req.body.uid },
    req.body
  );
  return res.sendStatus(200).json(updatedAnime);
};

exports.readOne = async (req, res) => {
  const anime = await AnimeModel.find({ uid: req.body.uid }).populate('reviews');
  
  return res.status(200).json(anime);
};

exports.readMany = async (req, res) => {
  const anime = await AnimeModel.find({ uid: { $in: req.body.uid } });
  return res.status(200).json(anime);
};
