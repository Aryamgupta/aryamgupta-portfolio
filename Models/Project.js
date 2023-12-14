const mongoose = require("mongoose");

const projectModel = mongoose.Schema({
  title: { type: String },
  imageLink: { type: String },
  des: { type: String },
  techStack: { type: String },
  link: { type: String },
  date: { type: String },
});

const Project = mongoose.model("Project", projectModel);

module.exports = Project;
