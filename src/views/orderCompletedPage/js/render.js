import * as components from './getSessionUserProductData.js';

const orderInfo = document.querySelector('.order-completed-date-number');
orderInfo.innerHTML = components.orderInfoComponent;

const recipientTable = document.querySelector('.recipient-table');
recipientTable.innerHTML = components.userInfoComponent;

const paymentTable = document.querySelector('.payment-table');
paymentTable.innerHTML = components.paymentInfoComponent;
