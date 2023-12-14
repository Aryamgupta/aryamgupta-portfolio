const express = require("express");
const { protect } = require("../Middleware/authAdmin");
const {
  getPersonalInfromation,
  editPersonalInformations,
} = require("../Controllers/personalInfoControllers");

const router = express.Router();

router.route("/").get(getPersonalInfromation);

router.route("/").put(protect, editPersonalInformations);

module.exports = router;
