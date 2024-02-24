const express = require("express");
const reviewController = require("./review.controller");


const router = express.Router();

router.post("/create-one-review", reviewController.createOne);
router.post("/delete-one-review", reviewController.deleteOne);
router.post("/update-one-review", reviewController.updateOne);
router.get("/read-one-review", reviewController.readOne);


module.exports = router;
