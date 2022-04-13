const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const districtSchema = new mongoose.Schema({
  leader: {
    type: mongoose.Types.ObjectId,
    ref: "DistrictLeader",
  },
  organization: { type: mongoose.Types.ObjectId, ref: "Organization" },
  groups: [{ type: mongoose.Types.ObjectId, ref: "Group" }],
  startDate: { type: Date },
  status: { isActive: { type: Boolean }, endDate: { type: Date } },
});

// groupSchema.plugin(uniqueValidator);
module.exports = mongoose.model("District", districtSchema);

//the number of meetings can be got from the number of reports submitted..
//meetings dates are also the dates got from the reports
//attendance is got from the group reports..
