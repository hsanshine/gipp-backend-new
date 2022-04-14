const mongoose = require("mongoose");
const Leader = require("./leader");

const Admin = Leader.discriminator(
  "Leader",
  new mongoose.Schema(
    {
      organization: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Organization",
      },
    },
    { discriminatorKey: "kind" }
  )
);

module.exports = Admin;
