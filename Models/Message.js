const mongoose = require("mongoose");

const messaageModel = mongoose.Schema({
  senderName: { type: String },
  senderEmail: { type: String },
  message: { type: String },
  time: { type: Date },
});

const Message = mongoose.model("Message", messaageModel);

module.exports = Message;
