const mongoose = require("mongoose");

const personalInfoModel = mongoose.Schema({
  personalInfo: { type: String },
});

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoModel);

module.exports = PersonalInfo;
