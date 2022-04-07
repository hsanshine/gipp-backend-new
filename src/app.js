const HttpError = require("./models/http-error");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index"); //default
var usersRouter = require("./routes/users");

// const dbObject = require("./database/database");
const envVars = require("../config");
const { start } = require("repl");
const { db } = require("../config");
const PORT = process.env.PORT || 3000;

var app = express();
// app.set("port", PORT);

// view engine setup

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/api/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const error = new HttpError("Resource not found!", 404);
  next(error);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.code || 500);
  res.json({ error: err.message });
});

// function startApp() {
//   app.listen(PORT, () => {
//     console.log("App is listening on", PORT);
//   });
// }

// dbObject._connect(startApp);

mongoose
  .connect(
    `mongodb+srv://hsanshine:${envVars.db.pwd}@cluster0.c34iv.mongodb.net/${envVars.db.name}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is listenin on", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
