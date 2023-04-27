import * as session from '../../webStorage/js/sessionStorage.js';
import renderUserProduct from './renderUserProduct.js';

const setSession = (userProductInfo) => {
  session.setUserProduct('userProductInfo', userProductInfo);
};

const setSessionUserProductInfo = async () => {
  const moveToCompleteBtn = document.querySelector('.move-to-completed');

  const setSessionUserProduct = async (e) => {
    e.preventDefault();
    const userProductInfo = await renderUserProduct();

    setSession(userProductInfo);
    window.location.href = '/order/complete';
  };

  moveToCompleteBtn.addEventListener('click', setSessionUserProduct);
};

export default setSessionUserProductInfo;
