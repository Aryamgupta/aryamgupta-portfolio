const express = require("express");
const { protect } = require("../Middleware/authAdmin");
const {
  getAllMessages,
  postNewMessage,
  deleteMessage,
} = require("../Controllers/messageConrollers");

const router = express.Router();

router.route("/").get(protect, getAllMessages);
router.route("/").post(postNewMessage);
router.route("/:id").delete(protect, deleteMessage);

module.exports = router;
