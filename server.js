"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const app = express();
const mongoose = require('mongoose');

(async () => {
  app.use(bodyParser.json());
  app.use(router())
  
  try {
    await mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true });
  } catch {
    console.log('Cannot connect to database. Exiting.');
    process.exit();
  }

  app.listen(3000, () => {
    console.log('application is listening http://localhost:3000')
  })
})();
