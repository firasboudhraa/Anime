const express = require("express");
const reviewController = require("./review.controller");
const  {errorWrapper } = require ("../lib/errorHandler")


const router = express.Router();

router.post("/create-one-review", errorWrapper(reviewController.createOne));
router.post("/delete-one-review", errorWrapper(reviewController.deleteOne));
router.post("/update-one-review", errorWrapper(reviewController.updateOne));
router.get("/read-one-review", errorWrapper(reviewController.readOne));


module.exports = router;
