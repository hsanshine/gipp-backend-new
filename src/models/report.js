const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const reportSchema = new mongoose.Schema({
  group: { type: mongoose.Types.ObjectId, ref: "Group", required: true },
  date: { type: Date },
  membersPresent: [{ type: mongoose.Types.ObjectId, ref: "Member" }],
  membersAbsent: [{ type: mongoose.Types.ObjectId, ref: "Member" }],
  meetingSummary: { type: String, reqiured: true },
  meetingType: { type: String, enum: ["offline", "online", "hybrid"] },
  requests: [{ type: mongoose.Types.ObjectId, ref: "Request" }],
  miscellenous: { type: String },
  reviewed: {
    person: { type: mongoose.Types.ObjectId, ref: "Admin" },
    date: { type: Date },
  },
});

module.exports = mongoose.model("Report", reportSchema);
