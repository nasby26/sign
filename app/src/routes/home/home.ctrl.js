'use strict';

const users = {
  id: ['nasby', 'sangari', 'tangza'],
  pw: ['1234', '1234', '123456'],
}

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
}

const process = {
  login: (req, res) => {
    const id = req.body.id
    const pw = req.body.pw

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
          msg: "로그인에 성공하셨습니다.",
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    })
  },
}


module.exports = {
  output,
  process
}