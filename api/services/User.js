'use strict';

const UserModel = require('../models/users');

class User {
  constructor(id) {
    this.id = id;
  }
  hasValue() {
    return !!this.id;
  }
  async value() {
    const user = await UserModel.findOne({ _id: this.id })
    return this.__generateValue(user);
  }
  async update(firstName, lastName, age) {
    await UserModel.updateOne(
      { _id: this.id },
      {
        firstName,
        lastName,
        age: Number(age)
      })
  }
  __generateValue(user) {
    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age
    }
  }
}

module.exports = User;
