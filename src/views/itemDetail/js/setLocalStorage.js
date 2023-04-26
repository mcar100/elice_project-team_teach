import * as local from '../../webStorage/js/localStorage.js';

// console.log(`productIdBtn: ${productIdBtn.textContent}`);
// console.log(`addCartBtn: ${addCartBtn.textContent}`);
// 이미 있으면 이미 있는 상품이라고 alert(get) -> 장바구니로 이동

const setProductToLocalStorage = (product) => {
  console.log(product);
  const { id } = product;

  local.setProductToCart(String(id), JSON.stringify(product));
};

export { setProductToLocalStorage };
