const asyncHandler = require("express-async-handler");
const Link = require("../Models/Link");

const getAllLinks = asyncHandler(async (req, res) => {
  try {
    const allLinks = await Link.find();
    res.json(allLinks);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const postNewLink = asyncHandler(async (req, res) => {
  const { linkName, link } = req.body;

  try {
    const newLink = await Link.create({
      linkName,
      link,
    });
    res.json(newLink);
  } catch (error) {
    res.send({ error: error.message });
  }
});

const deleteLink = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  try {
    const link = await Link.deleteOne({ _id });
    res.json(link);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = { getAllLinks, postNewLink, deleteLink };
