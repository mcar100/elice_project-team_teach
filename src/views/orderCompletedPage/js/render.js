import * as components from './getSessionUserProductData.js';
import * as session from '../../webStorage/js/sessionStorage.js';

const orderInfo = document.querySelector('.order-completed-date-number');
orderInfo.innerHTML = components.orderInfoComponent;

const recipientTable = document.querySelector('.recipient-table');
recipientTable.innerHTML = components.userInfoComponent;

const paymentTable = document.querySelector('.payment-table');
paymentTable.innerHTML = components.paymentInfoComponent;

// 구현해야 할 것(유저정보완료되면 바로 할 수 있을 듯)
const createOrderInfo = {
  // session delete 하기 전에 Order collection에 데이터 추가하기.
};

const deleteSession = () => {
  const sessionData = Object.keys(sessionStorage);
  sessionData.forEach((data) => {
    const product = session.getProduct(data);

    if (JSON.parse(product).deliveryFee) session.deleteProduct(data);
  });
  session.deleteProduct('userProductInfo');
};

createOrderInfo();
deleteSession();
