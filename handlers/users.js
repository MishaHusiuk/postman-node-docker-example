'use strict';

const UserModel = require('../models/users');

async function getUser(req, res) {
  const id = req.params.id;
  const user = await UserModel.findOne({ _id: id });
  if(user) {
    res.status(200).json(user);
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

  const user = new UserModel({ 
    firstName,
    lastName,
    age: Number(age)
  });
  await user.save();

  res.status(201).json(user);
}

async function putUser(req, res) {
  const id = req.params.id;
  const { 
    firstName,
    lastName,
    age
  } = req.body;
  const user = await UserModel.findOne({ _id: id });
  if(!user) {
    res.status(404).send();
  } else {
    await UserModel.updateOne({ _id: id }, { firstName, lastName, age: Number(age) })
    const user = await UserModel.findOne({ _id: id });
    res.json(user);
  }
}

async function deleteUser(req, res) {
  const id = req.params.id;
  const user = await UserModel.findOne({ _id: id });
  if(!user) {
    res.status(404).send();
  } else {
    await UserModel.deleteOne({ _id: id });
  }
  res.json({ deleted: id });
}

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser
}