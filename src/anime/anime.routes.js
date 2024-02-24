const express = require("express");
const animeController = require("./anime.controller");
const  {errorWrapper } = require ("../lib/errorHandler")


const router = express.Router();

router.post("/create-one-anime", errorWrapper(animeController.createOne));
router.post("/create-many-anime",errorWrapper(animeController.createMany))
router.post("/delete-one-anime-by-uid",errorWrapper(animeController.deleteOneByUid));
router.post("/delete-many-anime-by-uid",errorWrapper(animeController.deleteManyByUid));
router.post("/update-one-anime",errorWrapper(animeController.updateOne));
router.get("/read-one-anime",errorWrapper(animeController.readOne));
router.get("/read-many-anime",errorWrapper(animeController.readMany));


module.exports = router;
