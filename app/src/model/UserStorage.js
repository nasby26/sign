'use strict';

class UserStorage {
  static #users = {
    id: ['nasby', 'sangari', 'tangza'],
    pw: ['1234', '1234', '123456'],
    name: ['김지민', '박상아', '김탱자'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;