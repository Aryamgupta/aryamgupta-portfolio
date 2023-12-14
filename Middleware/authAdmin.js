const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const protect = asyncHandler(async (req, res, next) => {
  let pin = req.headers.pin;
  if (pin) {
    try {
      const t = await bcrypt.compare(pin, process.env.ADMIN_ENCRUPTED);
      if (t) {
        next();
      } else {
        res.status(400);
        res.send("Authorization Failed");
      }
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, pin failed");
    }
  }

  if (!pin) {
    res.status(401);
    throw new Error("Not authorized, no pin");
  }
});

module.exports = { protect };
