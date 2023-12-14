const asyncHandler = require("express-async-handler");

const Message = require("../Models/Message");

const getAllMessages = asyncHandler(async (req, res) => {
  try {
    const allMessages = await Message.find();
    res.json(allMessages);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const postNewMessage = asyncHandler(async (req, res) => {
  const { senderName, senderEmail, message } = req.body;

  try {
    const newLink = await Message.create({
      senderName,
      senderEmail,
      message,
      time: Date.now(),
    });
    res.json(newLink);
  } catch (error) {
    res.send({ error: error.message });
  }
});

const deleteMessage = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  try {
    const message = await Message.deleteOne({ _id });
    res.json(message);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = { getAllMessages, postNewMessage, deleteMessage };
