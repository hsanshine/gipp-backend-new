import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index-routes"); //default
const orgRouter = require("./routes/org-routes");
const districtRouter = require("./routes/district-routes");
const groupRouter = require("./routes/group-routes");
const leaderRouter = require("./routes/leader-routes");

// const dbObject = require("./database/database");
const envVars = require("../config");
const { start } = require("repl");
const { db } = require("../config");
import swaggerOptions from "./utils/swaggerOptions";
// const swaggerOptions = require("./utils/swaggerOptions");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GIPP",
      version: "1.0.0",
      description: "Go Group Internal Portal Project",
      termsOfSevice: "http://example.com/terms",
      contact: {
        name: "API support",
        url: "http://www.example.com/support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "My API documentation",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

const PORT = process.env.PORT || 5000;

var app = express();

app.use(logger("dev"));

app.use(express.json());

//remember to change this to just the sever with your front end code
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  //we are not allowing PUT, OPTIONS, HEAD, etc
  next();
});

// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// api documentation middleware
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use("/api", indexRouter);
app.use("/api", orgRouter);
app.use("/api", leaderRouter);
app.use("/api", districtRouter);
app.use("/api", groupRouter);

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
      console.log(`App started at http://localhost:${PORT}/api`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
