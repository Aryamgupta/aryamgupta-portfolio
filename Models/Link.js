const mongoose = require("mongoose");

const linkModel = mongoose.Schema({
  link: { type: String },
  linkName: { type: String },
});

const Link = mongoose.model("Link", linkModel);

module.exports = Link;
