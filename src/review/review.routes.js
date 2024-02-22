const express = require("express");
const reviewController = require("./review.controller");


const router = express.Router();

router.post("/create-one-review", reviewController.createOne);
router.post("/create-many-review",reviewController.createMany)
router.post("/delete-one-review-by-uid",reviewController.deleteOneByUid);
router.post("/delete-many-review-by-uid",reviewController.deleteManyByUid);
router.post("/update-one-review",reviewController.updateOne);
router.get("/read-one-review",reviewController.readOne);
router.get("/read-many-review",reviewController.readMany);


module.exports = router;
