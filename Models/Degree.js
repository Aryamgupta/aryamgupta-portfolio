const mongoose = require("mongoose");

const degreeModel = mongoose.Schema({
  DegreeName: { type: String },
  DegreeInstitude: { type: String },
  DegreePercentage: { type: String },
  DegreeYear: { type: String },
});

const Degree = mongoose.model("Degree", degreeModel);

module.exports = Degree;
