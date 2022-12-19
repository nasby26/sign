'use strict';

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const {id, pw} = UserStorage.getUserInfo(body.id);

    if(id) {
      if (id === this.body.id && pw === this.body.pw) {
        return {success: true, msg: "로그인에 성공했습니다."};
      }
      return {success: false, msg: "비밀번호가 틀렸습니다."}
    }
    return {success: false, msg: "존재하지 않는 아이디입니다."}
  }
}

module.exports = User;