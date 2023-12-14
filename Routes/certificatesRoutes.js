const express = require("express");
const { protect } = require("../Middleware/authAdmin");
const {
  getAllCertificates,
  postNewCertificate,
  deleteCertificate,
} = require("../Controllers/certificateControllers");

const router = express.Router();

router.route("/").get(getAllCertificates);
router.route("/").post(protect, postNewCertificate);
router.route("/").delete(protect, deleteCertificate);

module.exports = router;
