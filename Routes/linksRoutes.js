const express = require("express");
const { protect } = require("../Middleware/authAdmin");
const {
  getAllLinks,
  postNewLink,
  deleteLink,
} = require("../Controllers/linksControllers");

const router = express.Router();

router.route("/").get(getAllLinks);
router.route("/").post(protect, postNewLink);
router.route("/").delete(protect, deleteLink);

module.exports = router;
