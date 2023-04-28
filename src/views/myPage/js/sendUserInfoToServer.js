import { getUserId } from '../../orderPage/js/getUserId.js';

async function sendUserInfoToServer(changeInfo) {
  const token = sessionStorage.getItem('techmate_token');
  const { userId } = await getUserId(token);
  const { currentPassword, password, mobileNumber, address } = changeInfo;
  const response = await fetch(`http://localhost:3000/users/${userId}`, {
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
  const data = await response.json();
  console.log(data);
  alert('정보가 수정되었습니다');
  location.href = '/';
}

function changeUserInfo() {
  const changeInfoBtn = document.querySelector('.change-user-info');
  const phoneNumberInput = document.querySelector('.input-phonenumber');
  const addressInput = document.querySelector('.input-address');
  const passwordInput = document.querySelector('.input-password');
  const passwordConfirmInput = document.querySelector('.input-passwordConfirm');
  changeInfoBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const changeInfo = {
      currentPassword: passwordConfirmInput.value,
      password: passwordInput.value,
      mobileNumber: phoneNumberInput.value,
      address: addressInput.value,
    };
    await sendUserInfoToServer(changeInfo);
  });
}

export { changeUserInfo };
