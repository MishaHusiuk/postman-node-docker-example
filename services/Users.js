'use strict';

const User = require('./User');
const UserModel = require('../models/users');

class Users {
  async find(id) {
    const userId = await UserModel.findOne({_id: id}, { _id: 1 });
    return new User(userId);
  }
  async add(firstName, lastName, age) {
    const user = new UserModel({
      firstName,
      lastName,
      age: Number(age)
    });
    await user.save();
    return new User(user.id);
  }
  async remove(id) {
    await UserModel.deleteOne({ _id: id });
  }
}

module.exports = Users;
