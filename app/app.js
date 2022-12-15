'use strict';

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

// use -> middleware를 등록하는 메서드
app.use(express.static(`${__dirname}/src/public`)); // 정적경로 생성 관련 
app.use("/", home);

module.exports = app;