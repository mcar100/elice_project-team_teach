import { getUserId } from '../../orderPage/js/getUserId.js';

const orderCheck = async () => {
  const token = sessionStorage.getItem('techmate_token');
  const { userId } = await getUserId(token);

  const response = await fetch(
    `http://34.22.85.74:3000/orders/users/${userId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

const orderCancel = async (orderId) => {
  const token = sessionStorage.getItem('techmate_token');

  const response = await fetch(
    `http://34.22.85.74:3000/orders/users/${orderId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = response.json();
  alert('주문이 취소되었습니다.', data);
  window.location.reload();
};
export { orderCheck, orderCancel };
