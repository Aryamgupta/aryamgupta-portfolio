const mongoose = require("mongoose");

const certificateModel = mongoose.Schema({
  img: { type: String },
  link: { type: String },
  givenBy: { type: String },
});

const Certificate = mongoose.model("Certificate", certificateModel);

module.exports = Certificate;
