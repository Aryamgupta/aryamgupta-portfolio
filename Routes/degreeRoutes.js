const express = require("express");
const {
  getAllDegrees,
  postNewDegree,
  deleteDegree,
} = require("../Controllers/degreeControllers");
const { protect } = require("../Middleware/authAdmin");

const router = express.Router();

router.route("/").get(getAllDegrees);
router.route("/").post(protect, postNewDegree);
router.route("/").delete(protect, deleteDegree);

module.exports = router;
