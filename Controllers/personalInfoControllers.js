const asyncHandler = require("express-async-handler");
const PersonalInfo = require("../Models/PersonalInfo");

// handler for getting the personal infromation from the database

const getPersonalInfromation = asyncHandler(async (req, res) => {
  const info = await PersonalInfo.findOne({ _id: "657832fbb9f0e5998d9ee3d2" });
  res.json(info);
});

// for editing the personal details
const editPersonalInformations = asyncHandler(async (req, res) => {
  const { personalInfo } = req.body;

  const info = await PersonalInfo.findOne({ _id: "657832fbb9f0e5998d9ee3d2" });

  info.set({ personalInfo: personalInfo });
  await info.save();

  res.json(info);
});

module.exports = { getPersonalInfromation, editPersonalInformations };
