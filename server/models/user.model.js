const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    phone: { type: String, required: true, unique: true },
  },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
