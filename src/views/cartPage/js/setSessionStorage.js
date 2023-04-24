// import * as session from '../../webStorage/js/sessionStorage.js';

const aa = () => {
  const orderBtn = document.querySelectorAll('.each-order-button');

  const setProductIdToSessionStorage = (e) => {
    // const productId = orderBtn.classList[1];
    // session.setProduct(String(productId));
    console.log(e);
    alert(productId);
  };

  Array.from(orderBtn).forEach((btn) => {
    btn.addEventListener('click', setProductIdToSessionStorage);
  });
};

export default aa;
