import { setTokenToSessionStorage } from './setSessionStorage.js';

const idButton = document.getElementById('player-id');
const passwordButton = document.getElementById('player-password');
const loginButton = document.getElementById('player-login');

async function login(email, password) {
  const res = await fetch(`http://34.22.85.74:3000/users/signin`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (res.status === 500) {
    alert('로그인 정보를 다시 확인하세요.');
    return;
  }

  const logins = await res.json();

  if (res.status === 200) {
    setTokenToSessionStorage('techmate_token', logins.token);
    window.location.href = '/';
  }
}

loginButton.addEventListener('click', () => {
  const id = idButton.value;
  const password = passwordButton.value;

  login(id, password);
});
