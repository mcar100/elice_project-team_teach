import * as session from '../../webStorage/js/sessionStorage.js';

const getUserId = async () => {
  const token = session.getProduct('techmate_token');

  if (!token) return;
  const response = await fetch(`http://34.22.85.74:3000/users/token-decode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return { data, token };
};

const getUserInfo = async (userId, token) => {
  if (!userId || !token) return;
  const response = await fetch(`http://34.22.85.74:3000/users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

const replaceComponent = (address) => {
  const shippingAddress = document.querySelector('.shipping-address');

  if (address) shippingAddress.textContent = address;
  else shippingAddress.textContent = '비회원입니다.';
};

const getData = await getUserId();
if (getData) {
  const { data, token } = getData;
  const userInfo = await getUserInfo(data.userId, token);
  replaceComponent(userInfo.address);
} else replaceComponent(null);
