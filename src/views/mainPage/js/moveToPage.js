import { movePage } from '../../../utils/routerEvent/login.js';

export function moveToPage(path) {
  const btn = document.querySelector('.nav-register.btn');
  console.log(btn);
  btn.addEventListener('click', movePage(`${path}`));
}
