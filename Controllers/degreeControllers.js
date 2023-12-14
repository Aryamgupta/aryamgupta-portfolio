const asyncHandler = require("express-async-handler");

const Degree = require("../Models/Degree");

const getAllDegrees = asyncHandler(async (req, res) => {
  try {
    const allDegree = await Degree.find();
    res.json(allDegree);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const postNewDegree = asyncHandler(async (req, res) => {
  const { DegreeName, DegreeInstitude, DegreePercentage, DegreeYear } =
    req.body;

  try {
    const newDegree = await Degree.create({
      DegreeName,
      DegreeInstitude,
      DegreePercentage,
      DegreeYear,
    });
    res.json(newDegree);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const deleteDegree = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  try {
    const degree = await Degree.deleteOne({ _id });
    res.json(degree);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = { getAllDegrees, postNewDegree, deleteDegree };
