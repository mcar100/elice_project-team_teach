import { moveToLogin } from '../EventComponent/moveEventCommon.js';

const registerBtn = document.querySelector('.nav-register-btn');

function signOut() {
  sessionStorage.removeItem('techmate_token');
  location.reload();
}

const manageSign = () => {
  const getToken = sessionStorage.getItem('techmate_token');
  if (getToken) {
    registerBtn.innerText = '로그아웃';
    registerBtn.addEventListener('click', signOut);
  } else {
    registerBtn.addEventListener('click', moveToLogin);
    registerBtn.innerText = '로그인/회원가입';
  }
};

export { manageSign };
