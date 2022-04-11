const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const prayerRequestSchema = new mongoose.Schema({
  group: { type: mongoose.Types.ObjectId, ref: "Group", required: true },
  date: { type: Date, required: true },
  request: { type: String, reqiured: true },
  reviewed: {
    person: { type: mongoose.Types.ObjectId, ref: "Pastor" },
    date: { type: Date },
  },
});

module.exports = mongoose.model("PrayerRequest", prayerRequestSchema);
