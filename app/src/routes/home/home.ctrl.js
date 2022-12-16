'use strict';

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
    console.log(req.body); // 프론트엔드에서 전달한 req 데이터
  },
}


module.exports = {
  output,
  process
}