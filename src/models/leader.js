const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const extendSchema = require("../utils/extendSchema");
const memberSchema = require("./member");

const leaderSchema = mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  birthDate: { type: Date },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address of leader is required",
    lowercase: true,
    validate: [validator.isEmail, "Please fill a valid email address"],
  },
  password: { type: String, required: true },
  nationality: { type: String, trim: true },

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
//TODO: add a get for the full name

module.exports = mongoose.model("Leader", leaderSchema);
