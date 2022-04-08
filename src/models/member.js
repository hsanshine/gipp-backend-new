const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const memberSchema = new mongoose.Schema({
  name: {
    first: { type: String, required: true, trim: true },
    last: { type: String, trim: true },
  },
  birthDate: { type: Date },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Please fill a valid email address"],
  },
  nationality: { type: String, trim: true },
  picture: { type: String },
});

//TODO: will add a picture later

module.exports = mongoose.model("Member", memberSchema);
