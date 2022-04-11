const mongoose = require("mongoose");
const Leader = require("./leader");

const DistrictLeader = Leader.discriminator(
  "GroupLeader",
  new mongoose.Schema(
    {
      district: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "District",
      },
    },
    { discriminatorKey: "kind" }
  )
);

module.exports = DistrictLeader;
