const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const requestSchema = new mongoose.Schema({
  group: { type: mongoose.Types.ObjectId, ref: "Group", required: true },
  date: { type: Date, required: true },
  requestData: { type: String, reqiured: true },
  reviewed: {
    person: { type: mongoose.Types.ObjectId, ref: "Admin" },
    date: { type: Date },
  },
});

module.exports = mongoose.model("Request", requestSchema);
