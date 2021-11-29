"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./api/router");
const app = express();
const mongoose = require('mongoose');

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/local';
const port = process.env.PORT || 3000;

(async () => {
  app.use(bodyParser.json());
  app.use(router())
  
  try {
    await mongoose.connect(mongoConnectionString, { useNewUrlParser: true });
  } catch {
    console.log('Cannot connect to database. Exiting.');
    process.exit();
  }

  app.listen(port, () => {
    console.log(`application is listening http://localhost:${port}`)
  })
})();
