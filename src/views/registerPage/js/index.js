/* eslint-disable node/no-unsupported-features/es-syntax */
import { header } from '../../headerComponent/header.js';
import { footer } from '../../footerComponent/footer.js';

const registerButton = document.getElementById('register-button');
const emailBox = document.getElementById('player-email');
const usernameBox = document.getElementById('player-username');
const passwordBox = document.getElementById('player-password');
const passwordConfirmBox = document.getElementById('player-password-confirm');
const phoneNumberBox = document.getElementById('player-phone-number');
const addressBox = document.getElementById('player-address');
const duplicateButton = document.getElementById('duplicate-check');
const cancelButton = document.getElementById('register-cancel');
let checkFlags = 0;

async function checkDuplicate(email) {
  if (email.length <= 0) {
    alert('이메일을 입력해주세요.');
    return;
  }

  const res = await fetch(
    `http://34.22.85.74:3000/users/signup/check-email-duplication`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  );

  const login = await res.json();

  if (login.result === 'true') {
    alert('사용 가능한 아이디입니다.');
    checkFlags = 1;
  } else {
    alert('중복된 아이디입니다.');
  }
}
duplicateButton.addEventListener('click', async () => {
  const email = emailBox.value;
  await checkDuplicate(email);
});

cancelButton.addEventListener('click', () => {
  if (confirm('회원가입을 취소하시겠습니까?')) {
    history.back();
  }
});

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

async function register(username, email, password, phoneNumber, address) {
  if (checkFlags === 0) {
    alert('아이디 중복확인을 해주세요.');
    return;
  }

  const res = await fetch(`http://34.22.85.74:3000/users/signup`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
      mobileNumber: phoneNumber,
      address: address,
    }),
  });

  if (res.status === 201) {
    alert('회원가입이 완료되었습니다.');
    window.location.href = '/signin';
  } else {
    alert('회원가입이 실패했습니다. 정보를 다시 확인해주세요.');
  }
}

emailBox.addEventListener('blur', () => {
  const email = emailBox.value;

  if (!checkEmail(email)) {
    document.getElementById('email-error').style.display = 'block';
  } else {
    document.getElementById('email-error').style.display = 'none';
  }
});

usernameBox.addEventListener('blur', () => {
  const username = usernameBox.value;

  if (username.length <= 0) {
    document.getElementById('username-error').style.display = 'block';
  } else {
    document.getElementById('username-error').style.display = 'none';
  }
});

passwordBox.addEventListener('blur', () => {
  const password = passwordBox.value;

  if (password.length < 8 || password.length > 20) {
    document.getElementById('password-error').style.display = 'block';
  } else {
    document.getElementById('password-error').style.display = 'none';
  }
});

passwordConfirmBox.addEventListener('blur', () => {
  const password = passwordBox.value;
  const passwordConfirm = passwordConfirmBox.value;

  if (password !== passwordConfirm) {
    document.getElementById('password-confirm-error').style.display = 'block';
  } else {
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
  const username = document.getElementById('player-username').value;
  const email = document.getElementById('player-email').value;
  const password = document.getElementById('player-password').value;
  const passwordConfirm = document.getElementById(
    'player-password-confirm'
  ).value;
  const phoneNumber = document.getElementById('player-phone-number').value;
  const address = document.getElementById('player-address').value;
  const playerAgree = document.getElementById('player-agree').checked;

  if (!checkEmail(email)) {
    alert('이메일을 확인해주세요.');
    return;
  }

  if (username.length <= 0) {
    alert('아이디를 입력해주세요.');
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

  register(username, email, password, phoneNumber, address);
});
