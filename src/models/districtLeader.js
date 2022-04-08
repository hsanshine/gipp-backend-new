const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const districtLeaderSchema = mongoose.Schema({
  name: {
    first: { type: String, required: true, trim: true },
    last: { type: String, required: true, trim: true },
  },
  birthDate: { type: Date, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address of leader is required",
    validate: [validator.isEmail, "Please fill a valid email address"],
  },
  nationality: { type: String, required: true, trim: true },
  district: { type: mongoose.Types.ObjectId, required: true, ref: "District" },
  picture: { type: String },
});

pastorSchema.plugin(uniqueValidator);
//TODO: will add a picture later

module.exports = mongoose.model("DistrictLeader", districtLeaderSchema);
