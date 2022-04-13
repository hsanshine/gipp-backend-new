const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  db: {
    name: process.env.MONGO_DB_NAME,
    pwd: process.env.MONGO_DB_PWD,
    user: process.env.MONGO_DB_USER,
  },
};
