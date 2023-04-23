import * as local from '../../webStorage/js/localStorage.js';

const productIdBtn = document.getElementById('product-id');
const addCartBtn = document.getElementById('add-bucket');
// console.log(`productIdBtn: ${productIdBtn.textContent}`);
// console.log(`addCartBtn: ${addCartBtn.textContent}`);

const setProductIdToLocalStorage = () => {
  const productId = productIdBtn.textContent;

  local.setProduct(String(productId));
};
addCartBtn.addEventListener('click', setProductIdToLocalStorage);
