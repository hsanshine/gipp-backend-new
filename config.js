const dotenv = require("dotenv");

dotenv.config();

`#mongo db user name
MONGO_DB_USERNAME = 'hsanshine'

#mongo db password
MONGO_DB_PWD = 'qWJ7XOQD8uTMmOco'

#mongo db name
MONGO_DB_NAME = 'gipp-dev'
`;

module.exports = {
  db: {
    name: process.env.MONGO_DB_NAME,
    pwd: process.env.MONGO_DB_PWD,
    user: process.env.MONGO_DB_USER,
  },
};
