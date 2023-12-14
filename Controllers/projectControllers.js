const asyncHandler = require("express-async-handler");

const Project = require("../Models/Project");

const getAllProjects = asyncHandler(async (req, res) => {
  try {
    const allProject = await Project.find();
    res.json(allProject);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const postNewProject = asyncHandler(async (req, res) => {
  const { title, imageLink, des, techStack, link } = req.body;

  try {
    const newProject = await Project.create({
      title,
      imageLink,
      des,
      techStack,
      link,
      date: Date.now(),
    });
    res.json(newProject);
  } catch (error) {
    res.send({ error: error.message });
  }
});

const deleteProject = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  try {
    const info = await Project.deleteOne({ _id });
    res.json(info);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const editProject = asyncHandler(async (req, res) => {
  const { _id, title, imageLink, des, techStack, link } = req.body;

  try {
    const project = await Project.findById(_id);

    if (title) project.set({ title });
    if (imageLink) project.set({ imageLink });
    if (des) project.set({ des });
    if (techStack) project.set({ techStack });
    if (link) project.set({ link });

    res.json(project);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = { getAllProjects, postNewProject, deleteProject, editProject };
