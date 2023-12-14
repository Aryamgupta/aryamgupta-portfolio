const asyncHandler = require("express-async-handler");

const Certificate = require("../Models/Certificate");

const getAllCertificates = asyncHandler(async (req, res) => {
  try {
    const allCertificate = await Certificate.find();
    res.json(allCertificate);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const postNewCertificate = asyncHandler(async (req, res) => {
  const { img, link, givenBy } = req.body;

  try {
    const newCertificate = await Certificate.create({
      img,
      link,
      givenBy,
    });
    res.json(newCertificate);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const deleteCertificate = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  try {
    const info = await Certificate.deleteOne({ _id });
    res.json({ info });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = { getAllCertificates, postNewCertificate, deleteCertificate };
