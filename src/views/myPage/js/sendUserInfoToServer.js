import { getUserId } from '../../orderPage/js/getUserId.js';

async function sendUserInfoToServer(changeInfo) {
  const token = sessionStorage.getItem('techmate_token');
  const { userId } = await getUserId(token);
  const { currentPassword, password, mobileNumber, address } = changeInfo;
  await fetch(`http://34.22.85.74:3000/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      currentPassword,
      password,
      mobileNumber,
      address,
    }),
  });

  alert('정보가 수정되었습니다');
  window.location.href = '/';
}

function changeUserInfo(password) {
  const changeInfoBtn = document.querySelector('.change-user-info');
  const phoneNumberInput = document.querySelector('.input-phonenumber');
  const addressInput = document.querySelector('.input-address');
  const passwordInput = document.querySelector('.input-password');
  const passwordConfirmInput = document.querySelector('.input-passwordConfirm');
  changeInfoBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (passwordInput.value !== passwordConfirmInput.value) {
      alert('새 비밀번호와 새 비밀번호 확인을 일치하게 입력하세요. ');
      return;
    }
    const changeInfo = {
      currentPassword: password,
      password: passwordInput.value ? passwordInput.value : password,
      mobileNumber: phoneNumberInput.value,
      address: addressInput.value,
    };
    await sendUserInfoToServer(changeInfo);
  });
}

export { changeUserInfo };
