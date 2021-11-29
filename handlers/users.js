'use strict';

const Users = require('../services/Users');

async function getUser(req, res) {
  const id = req.params.id;  
  const users = new Users();
  const user = await users.find(id);
  
  if(user.hasValue()) {
    const value = await user.value();
    res.status(200).json(value);
  } else {
    res.status(404).send();
  }
}

async function postUser(req, res) {
  const { 
    firstName,
    lastName,
    age
  } = req.body;

  const users = new Users();
  const user = await users.add(firstName, lastName, age);
  const value = await user.value()
  res.status(201).json(value);
}

async function putUser(req, res) {
  const id = req.params.id;
  const { 
    firstName,
    lastName,
    age
  } = req.body;
  const users = new Users();
  const user = await users.find(id);
  if(user.hasValue()) {
    await user.update( firstName, lastName, age);
    const value = await user.value();
    res.json(value);
  } else {
    res.status(404).send();
  }
}

async function deleteUser(req, res) {
  const id = req.params.id;
  const users = new Users();
  const user = await users.find(id);
  if(user.hasValue()) {
    users.remove(id);
    res.json({ deleted: id });
  } else {
    res.status(404).send();
  }
}

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser
}