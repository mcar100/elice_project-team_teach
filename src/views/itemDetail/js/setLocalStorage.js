import * as local from '../../webStorage/js/localStorage.js';
import {localBucketData} from "../../itemDetail/js/index.js";

const productIdBtn = document.getElementById('product-id');
const addCartBtn = document.getElementById('add-bucket');
// console.log(`productIdBtn: ${productIdBtn.textContent}`);
// console.log(`addCartBtn: ${addCartBtn.textContent}`);
// 이미 있으면 이미 있는 상품이라고 alert(get) -> 장바구니로 이동

const setProductIdToLocalStorage = () => {
  const product = localBucketData;
  console.log(product);

  local.setProduct(String(product));
};
addCartBtn.addEventListener('click', setProductIdToLocalStorage);
