const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const reportSchema = new mongoose.Schema({
  group: { type: mongoose.Types.ObjectId, ref: "Group" },
  date: { type: Date },
  membersPresent: [{ type: mongoose.Types.ObjectId, ref: "Member" }],
  membersAbsent: [{ type: mongoose.Types.ObjectId, ref: "Member" }],
  meetingSummary: { type: String },
  meetingType: { type: String, enum: ["offline", "online", "hybrid"] },
  prayerRequests: [{ type: mongoose.Types.ObjectId, ref: "PrayerRequest" }],
  miscellenous: { type: String },
  reviewed: {
    person: { type: mongoose.Types.ObjectId, ref: "Pastor" },
    date: { type: Date },
  },
});

module.exports = mongoose.model("Report", reportSchema);
