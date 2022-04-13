const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  districts: [{ type: mongoose.Types.ObjectId, ref: "District" }],
  admins: [{ type: mongoose.Types.ObjectId, ref: "Admin" }],
  leadAdmin: { type: mongoose.Types.ObjectId, ref: "Admin" },
  resources: [{ type: String }],
});

churchSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Organization", organizationSchema);
