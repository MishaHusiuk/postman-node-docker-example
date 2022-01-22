"use strict";

const express = require("express");
const router = express.Router();

const createBodyValidator = require("../middleware/body-validator");
const userHandler = require("../handlers/users");

module.exports = function initRouter() {
  router.get("/users/:id", userHandler.getUser);
  router.post("/users", [
    createBodyValidator("post-user"),
    userHandler.postUser,
  ]);
  router.put("/users/:id", [
    createBodyValidator("put-user"),
    userHandler.putUser,
  ]);
  router.delete("/users/:id", userHandler.deleteUser);

  return router;
};
