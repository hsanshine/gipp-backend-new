const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const churchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  districts: [{ type: mongoose.Types.ObjectId, ref: "District" }],
  pastors: [{ type: mongoose.Types.ObjectId, ref: "Pastor" }],
  leaderPastor: { type: mongoose.Types.ObjectId, ref: "Pastor" },
  resources: [{ type: String }],
});

churchSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Church", churchSchema);
