import * as components from './getSessionUserProductData.js';
import * as session from '../../webStorage/js/sessionStorage.js';

const orderInfo = document.querySelector('.order-completed-date-number');
orderInfo.innerHTML = components.orderInfoComponent;

const recipientTable = document.querySelector('.recipient-table');
recipientTable.innerHTML = components.userInfoComponent;

const paymentTable = document.querySelector('.payment-table');
paymentTable.innerHTML = components.paymentInfoComponent;

const deleteSession = () => {
  const sessionData = Object.keys(sessionStorage);
  sessionData.forEach((data) => {
    const product = session.getProduct(data);

    if (JSON.parse(product).deliveryFee) session.deleteProduct(data);
  });
  session.deleteProduct('userProductInfo');
};

deleteSession();
