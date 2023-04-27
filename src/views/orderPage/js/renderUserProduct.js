import addProductMainContents from './replaceProductComponent.js';
import addUserMainContents from './replaceUserComponent.js';
import { getTodayDate } from './utils.js';

const randomNumber13 = () => {
  const randomNum = Math.floor(Math.random() * 10000000000000);
  return randomNum;
};

const getUserProductData = (userData, productData) => {
  const productArr = [];
  Array.from(productData).forEach((productSessionData) => {
    const product = JSON.parse(productSessionData.value);
    productArr.push(product);
  });
  const orderDate = getTodayDate();
  const orderNumber = randomNumber13();
  const cpyUserData = userData;

  const orderData = {
    orderDate,
    orderNumber,
    userData: cpyUserData,
    productArr,
  };

  return orderData;
};

const renderUserProduct = async () => {
  const userData = await addUserMainContents();
  const productData = await addProductMainContents();

  return getUserProductData(userData, productData);
};

export default renderUserProduct;
