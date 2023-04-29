import * as components from './getSessionUserProductData.js';
import * as session from '../../webStorage/js/sessionStorage.js';

const replaceData = () => {
  const orderInfo = document.querySelector('.order-completed-date-number');
  orderInfo.innerHTML = components.orderInfoComponent;

  const recipientTable = document.querySelector('.recipient-table');
  recipientTable.innerHTML = components.userInfoComponent;

  const paymentTable = document.querySelector('.payment-table');
  paymentTable.innerHTML = components.paymentInfoComponent;
};

const goShoppingButton = document.querySelector(
  '.order-completed-button.order-completed-continue-shopping'
);
const myPageButton = document.querySelector(
  '.order-completed-button.order-completed-mypage'
);
const moveToCart = (e) => {
  e.preventDefault();
  window.location = '/cart';
};
const moveToHome = (e) => {
  e.preventDefault();
  window.location.href = '/';
};
goShoppingButton.addEventListener('click', moveToCart);
myPageButton.addEventListener('click', moveToHome);

replaceData();

const createOrderInfo = async () => {
  const orderInfoObject = {};
  const orderData = JSON.parse(session.getProduct('userProductInfo'));
  const userData = orderData.userData[0];
  const productData = orderData.productArr;
  const productInfo = {
    rentalPeriod: productData[0].rentalPeriod,
    quantity: 1,
    pricePerMonth: productData[0].pricePerMonth,
    color: productData[0].color[0],
  };
  let deliveryFee = 0;
  productData.forEach((element) => {
    deliveryFee += element.deliveryFee;
  });

  orderInfoObject.address = {};
  orderInfoObject.userId = userData._id || '111111111111111111111111';
  orderInfoObject.productName = productData[0].productName;
  orderInfoObject.address.address1 = userData.address;
  orderInfoObject.address.receiverName = userData.username;
  orderInfoObject.deliveryStatus = 'preparing';
  orderInfoObject.deliveryRequirements = userData.require;
  orderInfoObject.paymentOption = '애플페이';

  orderInfoObject.productInfo = productInfo;
  orderInfoObject.deliveryFee = deliveryFee;

  const response = await fetch(`http://34.22.85.74:3000/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderInfoObject),
  });
  return response;
};

const deleteSession = () => {
  const sessionData = Object.keys(sessionStorage);
  sessionData.forEach((data) => {
    const product = session.getProduct(data);

    if (
      (data === 'userProductInfo' || data.length === 24) &&
      JSON.parse(product).model
    )
      session.deleteProduct(data);
  });
  session.deleteProduct('userProductInfo');
};

createOrderInfo();
deleteSession();
