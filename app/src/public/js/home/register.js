'use strict';

const id = document.getElementById('id');
const name = document.getElementById('name');
const pw = document.getElementById('pw');
const confirmPw = document.getElementById('confirm-pw');
// const registerBtn = document.querySelector('button');
const registerBtn = document.getElementById('button');

registerBtn.addEventListener('click', register);

function register() {
  if (!id.value) return alert('아이디를 입력해주세요');
  if (pw.value !== confirmPw.value) return alert('비밀번호가 일치하지 않습니다.');

  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };
  
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('회원가입 중 에러 발생'));
    });
}