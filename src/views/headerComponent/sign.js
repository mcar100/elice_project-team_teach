import { moveToLogin } from '../EventComponent/moveEventCommon.js';

const port = 3000;

const signOutPromises = async () => {
  const token = sessionStorage.getItem('token');
  const response = await fetch(`http://localhost:${port}/users/signout`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    credentials: 'include',
  });
  const data = response.json();
  return data;
};

function checkCookie() {
  const cookies = document.cookie;
  console.log(cookies);
  if (!cookies) {
    console.log('there is no cookie');
    return false;
  }
  console.log(cookies);
  return true;
}

function signIn() {
  moveToLogin();
}

function signOut() {
  signOutPromises();
}

function manageSign() {
  const signButton = document.querySelector('.nav-register-btn');
  if (!checkCookie()) {
    signButton.innerText = '로그인/회원가입';
    signButton.addEventListener('click', signIn);
  } else {
    signButton.innerText = '로그아웃';
    signButton.addEventListener('click', signOut);
  }
}

export { manageSign };
