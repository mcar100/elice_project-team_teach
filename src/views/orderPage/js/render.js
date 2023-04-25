import totalPriceInfoFunc from './finalInfo.js';
import renderUserProduct from './renderUserProduct.js';
import setSessionUserProductInfo from './moveToComplete.js';

const render = async () => {
  await renderUserProduct();
  totalPriceInfoFunc();
  setSessionUserProductInfo();
};

render();
