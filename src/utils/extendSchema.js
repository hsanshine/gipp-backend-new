const mongoose = require("mongoose");

const extend = (baseSchema, obj) => {
  new mongoose.Schema(Object.assign({}, baseSchema, obj));
};

module.exports = extend;
