const express = require("express");
const { protect } = require("../Middleware/authAdmin");

const router = express.Router();

router.route("/").get(protect, async (req, res) => {
  const pin = req.headers.pin;
  res.json({ pin });
});

module.exports = router;
