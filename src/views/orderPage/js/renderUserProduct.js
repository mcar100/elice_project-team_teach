import addProductMainContents from './replaceProductComponent.js';
import addUserMainContents from './replaceUserComponent.js';

const randomNumber13 = () => {
  const randomNum = Math.floor(Math.random() * 10000000000000);
  return randomNum;
};

const getUserProductData = (userData, productData) => {
  const orderDate = `${new Date().getFullYear()}.${
    new Date().getMonth() + 1
  }.${new Date().getDate()}`;
  const orderNumber = randomNumber13();
  const { username, address, mobileNumber } = userData[0];
  const require = '문 앞에 놔주세요';
  const productArr = [];

  Array.from(productData).forEach((product) => {
    const productObj = {
      productId: product.productId,
      pricePerMonth: product.pricePerMonth,
      discountRate: product.discountRate,
      deliveryFee: product.deliveryFee,
    };
    productArr.push(productObj);
  });

  const orderData = {
    orderDate,
    orderNumber,
    username,
    address,
    mobileNumber,
    require,
    productArr,
  };
  // console.log(`orderData: ${JSON.stringify(orderData, null, 2)}`);
  return orderData;
};

const renderUserProduct = async () => {
  const userData = await addUserMainContents();
  const productData = await addProductMainContents();

  return getUserProductData(userData, productData);
};

export default renderUserProduct;
