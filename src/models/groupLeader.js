const mongoose = require("mongoose");
const Leader = require("./leader");

const GroupLeader = Leader.discriminator(
  "GroupLeader",
  new mongoose.Schema(
    {
      group: { type: mongoose.Types.ObjectId, required: true },
    },
    { discriminatorKey: "kind" }
  )
);

module.exports = GroupLeader;
