const mongoose = require("mongoose");
const envVars = require("../../config");

const URL = `mongodb+srv://hsanshine:${envVars.db.pwd}@cluster0.c34iv.mongodb.net/${envVars.db.name}?retryWrites=true&w=majority`;

class Database {
  constructor() {
    this._connect();
  }
  _connect(startApp) {
    mongoose
      .connect(URL)
      .then(() => startApp())
      .catch((err) => console.log(err));
  }
}

module.exports = new Database(); //we make the db ready for use..
