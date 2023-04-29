// import jwt from 'jsonwebtoken';
import totalPriceInfoFunc from './finalInfo.js';
import renderUserProduct from './renderUserProduct.js';
import setSessionUserProductInfo from './moveToComplete.js';
import noneUser from './noneUser.js';

const render = async () => {
  await renderUserProduct();
  totalPriceInfoFunc();
  setSessionUserProductInfo();
  noneUser();
};

render();
