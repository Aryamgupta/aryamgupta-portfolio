const express = require("express");
const { protect } = require("../Middleware/authAdmin");
const {
  getAllProjects,
  postNewProject,
  deleteProject,
  editProject,
} = require("../Controllers/projectControllers");

const router = express.Router();

router.route("/").get(getAllProjects);
router.route("/").post(protect, postNewProject);
router.route("/:id").delete(protect, deleteProject);
router.route("/").put(protect, editProject);

module.exports = router;
