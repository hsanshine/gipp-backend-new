const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const extendSchema = require("../utils/extendSchema");
const leaderSchema = require("./leader");
const schema = mongoose.Schema;

const pastorSchema = extendSchema(leaderSchema, {
  church: { type: mongoose.Types.ObjectId, required: true, ref: "Church" },
});

// const pastorSchema = new Schema({
//   name: {
//     first: { type: String, required: true, trim: true },
//     last: { type: String, required: true, trim: true },
//   },
//   birthDate: { type: Date, required: true },
//   email: {
//     type: String,
//     trim: true,
//     lowercase: true,
//     unique: true,
//     required: "Email address is required",
//     validate: [validator.isEmail, "Please fill a valid email address"],
//   },
//   church: { type: mongoose.Types.ObjectId, required: true, ref: "Church" },
//   nationality: { type: String, required: true, trim: true },
//   picture: { type: String },
// });

pastorSchema.plugin(uniqueValidator);
//TODO: will add a picture later

module.exports = mongoose.model("Pastor", pastorSchema);
