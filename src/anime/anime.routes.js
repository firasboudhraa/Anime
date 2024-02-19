const express = require("express");
const animeController = require("./anime.controller");


const router = express.Router();

router.post("/create-one-anime", animeController.createOne);
router.post("/create-many-anime",animeController.createMany)
router.post("/delete-one-anime-by-uid",animeController.deleteOneByUid);
router.post("/delete-many-anime-by-uid",animeController.deleteManyByUid);
router.post("/update-one-anime",animeController.updateOne);
router.get("/read-one-anime",animeController.readOne);
router.get("/read-many-anime",animeController.readMany);

module.exports = router;
