import * as session from '../../webStorage/js/sessionStorage.js';

const setSessionOne = () => {
  const orderBtn = document.querySelectorAll('.each-order-button');
  const setSessionStorage = (e) => {
    const productId = e.target.classList[1];

    session.setProduct(productId);
    // alert(productId);
  };

  Array.from(orderBtn).forEach((btn) => {
    btn.addEventListener('click', setSessionStorage);
  });
};

/**
 * @description
 * 주문하기 버튼을 누르면 checked 되어 있는 요소들을 선택해 session storage에 저장한다.
 */
const setSessionChecked = () => {
  const cartList = document.getElementsByClassName('cart-checkbox-part');
  const orderEntire = document.querySelector(
    '.final-confirmation-quantity-outer'
  );
  const checkedProducts = [];

  Array.from(cartList).forEach((product) => {
    if (product.checked === true) checkedProducts.push(product.id);
  });
  checkedProducts.forEach((productId) => {
    session.setProduct(productId);
  });

  orderEntire.addEventListener('click', setSessionChecked);
};

export { setSessionOne, setSessionChecked };
