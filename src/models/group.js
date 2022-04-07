const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = mongoose.Schema;

const groupSchema = new Schema({
  leader: { type: mongoose.Types.ObjectId, ref: "Member" },
  members: [{ type: mongoose.Types.ObjectId, ref: "Member" }],
  reports: [{ type: mongoose.Types.ObjectId, ref: "Report" }],
  formerMembers: [{ type: mongoose.Types.ObjectId, ref: "Member" }],
  startDate: { type: Date, required: true },
  status: { isActive: { type: Boolean }, endDate: { type: Date } },
});

// groupSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Group", groupSchema);

//the number of meetings can be got from the number of reports submitted..
//meetings dates are also the dates got from the reports
//attendance is got from the group reports..
