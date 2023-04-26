/* eslint-disable node/no-unsupported-features/es-syntax */
import { header } from '../../headerComponent/header.js';
import { footer } from '../../footerComponent/footer.js';

const registerButton = document.getElementById('register-button');
const idBox = document.getElementById('player-id');
const emailBox = document.getElementById('player-email');
const passwordBox = document.getElementById('player-password');
const passwordConfirmBox = document.getElementById('player-password-confirm');
const phoneNumberBox = document.getElementById('player-phone-number');
const addressBox = document.getElementById('player-address');
//const agreeBox = document.getElementById('player-agree');
const identityBox = document.getElementById('identity');

header();
footer();

function checkEmail(email) {
  const reg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return reg.test(email);
}

function checkPhoneNumber(number) {
  const input = number;

  const phoneFormat = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  if (phoneFormat.test(input)) {
    return true;
  }

  return false;
}

async function register(id, email, password, phoneNumber, address, identity) {
  const res = await fetch(`http://localhost:3000/signup`, {
    method: 'post',
    body: JSON.stringify({
      username: id,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      identity: identity,
    }),
  });
  const product = await res.json();

  return product;
}

idBox.addEventListener('blur', () => {
  const id = idBox.value;

  if (id.length <= 0) {
    document.getElementById('id-error').style.display = 'block';
  } else {
    document.getElementById('id-error').style.display = 'none';
  }
});

emailBox.addEventListener('blur', () => {
  const email = emailBox.value;

  if (!checkEmail(email)) {
    document.getElementById('email-error').style.display = 'block';
  } else {
    console.log('email no error');
    document.getElementById('email-error').style.display = 'none';
  }
});

passwordBox.addEventListener('blur', () => {
  const password = passwordBox.value;

  if (password.length < 8 || password.length > 20) {
    document.getElementById('password-error').style.display = 'block';
  } else {
    console.log('no error');
    document.getElementById('password-error').style.display = 'none';
  }
});

passwordConfirmBox.addEventListener('blur', () => {
  const password = passwordBox.value;
  const passwordConfirm = passwordConfirmBox.value;

  if (password !== passwordConfirm) {
    document.getElementById('password-confirm-error').style.display = 'block';
  } else {
    console.log('no error');
    document.getElementById('password-confirm-error').style.display = 'none';
  }
});

phoneNumberBox.addEventListener('blur', () => {
  const phoneNumber = phoneNumberBox.value;

  if (!checkPhoneNumber(phoneNumber)) {
    document.getElementById('phone-number-error').style.display = 'block';
  } else {
    document.getElementById('phone-number-error').style.display = 'none';
  }
});

addressBox.addEventListener('blur', () => {
  const address = addressBox.value;

  if (address.length <= 0) {
    document.getElementById('address-error').style.display = 'block';
  } else {
    document.getElementById('address-error').style.display = 'none';
  }
});

registerButton.addEventListener('click', () => {
  const id = document.getElementById('player-id').value;
  const email = document.getElementById('player-email').value;
  const password = document.getElementById('player-password').value;
  const passwordConfirm = document.getElementById(
    'player-password-confirm'
  ).value;
  const phoneNumber = document.getElementById('player-phone-number').value;
  const address = document.getElementById('player-address').value;
  const playerAgree = document.getElementById('player-agree').checked;
  const identity = identityBox.options[identityBox.selectedIndex].value;

  console.log(identity);

  if (id.length <= 0) {
    alert('아이디를 확인해주세요.');
    return;
  }

  if (!checkEmail(email)) {
    alert('이메일을 확인해주세요.');
    return;
  }

  if (password.length < 8 || password.length > 20) {
    alert('비밀번호를 다시 확인해주세요.');
    return;
  }

  if (password !== passwordConfirm) {
    alert('비밀번호 일치여부를 확인해주세요.');
    return;
  }

  if (!checkPhoneNumber(phoneNumber)) {
    alert('휴대폰 번호를 확인해주세요.');
    return;
  }

  if (address.length <= 0) {
    alert('주소를 입력해주세요.');
    return;
  }

  if (!playerAgree) {
    document.getElementById('agree-error').style.display = 'block';
    alert('회원가입 조건에 동의해주세요.');
    return;
  }

  register(id, email, password, phoneNumber, address, identity);
});
