const express = require("express");
const animeController = require("./anime.controller");


const router = express.Router();

router.post("/create-anime", animeController.create);
router.post("/delete-anime-by-uid",animeController.deleteByUid);

module.exports = router;
