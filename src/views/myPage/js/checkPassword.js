import { getResponsePage } from './responsePage.js';
import { getUserId, getUserInfo } from '../../orderPage/js/getUserId.js';
import { changeUserInfo } from './sendUserInfoToServer.js';

const checkPassword = async (password) => {
  const token = sessionStorage.getItem('techmate_token');
  const { userId } = await getUserId(token);
  const user = await getUserInfo(userId, token);

  const passwordCheckBtn = document.querySelector('.check-password-btn');
  const passwordCheckInput = document.querySelector('.input-password-check');
  passwordCheckBtn.addEventListener('click', async () => {
    const inputPassword = passwordCheckInput.value;
    if (inputPassword === password) {
      console.log('correct');
      await getResponsePage(user);
      await changeUserInfo();
    } else {
      alert('사용자의 비밀번호가 일치하지 않습니다.');
    }
  });
};

export { checkPassword };
