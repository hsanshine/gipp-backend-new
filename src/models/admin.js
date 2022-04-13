const mongoose = require("mongoose");
const Leader = require("./leader");

const Admin = Leader.discriminator(
  "GroupLeader",
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
