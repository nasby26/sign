// 프론트 단의 로그인 기능: 아이디와 비밀번호 값을 입력 받고 submit이 될 때에 그 정보를 서버로 넘겨주는 것

'use strict';

const id = document.getElementById('id');
const pw = document.getElementById('pw');
const loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };
}