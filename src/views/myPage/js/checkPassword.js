import { getResponsePage } from './responsePage.js';
import { getUserId, getUserInfo } from '../../orderPage/js/getUserId.js';
import { changeUserInfo } from './sendUserInfoToServer.js';

const checkPassword = async () => {
  const token = sessionStorage.getItem('techmate_token');
  const { userId } = await getUserId(token);
  const user = await getUserInfo(userId, token);

  const passwordCheckBtn = document.querySelector('.check-password-btn');
  const passwordCheckInput = document.querySelector('.input-password-check');
  passwordCheckBtn.addEventListener('click', async () => {
    const inputPassword = passwordCheckInput.value;
    const { ok } = await fetch('http://localhost:3000/users/password-check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        password: inputPassword,
      }),
    });

    if (ok) {
      console.log('correct');
      await getResponsePage(user);
      await changeUserInfo();
    } else {
      alert('사용자의 비밀번호가 일치하지 않습니다.');
    }
  });
};

export { checkPassword };
