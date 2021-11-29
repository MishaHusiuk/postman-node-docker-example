'use strict';

const express = require('express');
const router = express.Router();

const userHandler = require('../handlers/users');

module.exports = function initRouter() {
  router.get('/users/:id', userHandler.getUser);
  router.post('/users', userHandler.postUser);
  router.put('/users/:id', userHandler.putUser);
  router.delete('/users/:id', userHandler.deleteUser);

  return router;
}