import * as session from '../../webStorage/js/sessionStorage.js';

const setProductIdToSessionStorage = () => {
  const orderBtn = document.querySelectorAll('.each-order-button');

  const setSessionStorage = (e) => {
    const productId = e.target.classList[1];

    session.setProduct(productId);
  };

  Array.from(orderBtn).forEach((btn) => {
    btn.addEventListener('click', setSessionStorage);
  });
};

export default setProductIdToSessionStorage;
