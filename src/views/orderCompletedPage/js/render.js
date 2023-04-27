import * as components from './getSessionUserProductData.js';
import * as session from '../../webStorage/js/sessionStorage.js';

const orderInfo = document.querySelector('.order-completed-date-number');
orderInfo.innerHTML = components.orderInfoComponent;

const recipientTable = document.querySelector('.recipient-table');
recipientTable.innerHTML = components.userInfoComponent;

const paymentTable = document.querySelector('.payment-table');
paymentTable.innerHTML = components.paymentInfoComponent;

// 구현해야 할 것(유저정보완료되면 바로 할 수 있을 듯)
const createOrderInfo = async () => {
  // session delete 하기 전에 Order collection에 데이터 추가하기.
  const orderInfoObject = {};
  const orderData = JSON.parse(session.getProduct('userProductInfo'));

  orderInfoObject.userId = '60b9b0b9b3b3c2a8e8b0b9b3';
  orderInfoObject.productName = orderData.productName;
  orderInfoObject.address.address1 = orderData.address;
  orderInfoObject.address.receiverName = orderData.username;
  orderInfoObject.deliveryStatus = 'preparing';
  orderInfoObject.deliveryRequirements = orderData.require;

  // orderInfoObject.productInfo = orderData.;
  // orderInfoObject.deliveryFee = orderData.deliveryFee; // document해서 갖고오자.

  const response = await fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderInfoObject),
  });
  const data = response.json();
};
// const {
//   userId, o
//   productName, o
//   address, o
// productInfo: {
//   type: new Schema(
//   {
//     rentalPeriod: String,
//     quantity: Number,
//     pricePerMonth: Number,
//     color: String,
//   },
//   {
//     _id: false,
//   }
// ),
//   deliveryFee,
//   deliveryStatus, o
//   deliveryRequirements, o
//   paymentOption, x
// } = req.body;
fetch('http://localhost:3000/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Test',
    body: 'I am testing!',
    userId: 1,
  }),
}).then((response) => console.log(response));

const deleteSession = () => {
  const sessionData = Object.keys(sessionStorage);
  sessionData.forEach((data) => {
    const product = session.getProduct(data);

    if (JSON.parse(product).deliveryFee) session.deleteProduct(data);
  });
  session.deleteProduct('userProductInfo');
};

createOrderInfo();
// deleteSession();
