const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");
const schema = mongoose.Schema;

const extendSchema = require("../utils/extendSchema");
const memberSchema = require("./member");

const leaderSchema = extendSchema(memberSchema, {
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
  picture: { type: String },
});

// var leaderSchem = new Schema({
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
//   nationality: { type: String, required: true, trim: true },
//   picture: { type: String },
// });

leaderSchema.plugin(uniqueValidator);
//TODO: will add a picture later

module.exports = mongoose.model("Pastor", pastorSchema);
