
const AnimeModel = require ("./anime.model")

exports.create = async (req, res) => {
  await AnimeModel.create(req.body);  
  return res.sendStatus(201);
};

exports.deleteByUid = async (req, res) => {
    await AnimeModel.deleteOne({uid:req.body.uid});
    return res.sendStatus(204);
}
