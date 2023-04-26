import * as session from '../../webStorage/js/sessionStorage.js';
import * as local from '../../webStorage/js/localStorage.js';

const setSessionOne = () => {
  const orderBtn = document.querySelectorAll('.each-order-button');
  const setSessionStorage = (e) => {
    const productId = e.target.classList[1];
    const productData = local.getProduct(productId);

    session.setProduct(productId, JSON.parse(productData));
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
  const orderEntire = document.querySelector(
    '.final-confirmation-quantity-outer'
  );
  const cartList = document.getElementsByClassName('cart-checkbox-part');

  const setSession = (checkedProducts) => {
    checkedProducts.forEach((product) => {
      session.setProduct(product.productId, product.productInfo);
    });
  };

  const confirmChecked = (e) => {
    const checkedProducts = [];

    Array.from(cartList).forEach((product) => {
      if (product.checked === true)
        checkedProducts.push({
          productId: product.id,
          productInfo: local.getProduct(product.id),
        });
    });

    if (checkedProducts.length === 0) {
      e.preventDefault();
      alert('선택된 상품이 없습니다.');
      return -1;
    }
    setSession(checkedProducts);
  };

  orderEntire.addEventListener('click', confirmChecked);
};

export { setSessionOne, setSessionChecked };
