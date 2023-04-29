import { toCurrency } from './utils.js';
import * as local from '../../webStorage/js/localStorage.js';

const getCheckedCnt = () => {
  const showCheckedTotalPrice = document.getElementById('total-order-price');
  const cartList = document.getElementsByClassName('cart-checkbox-part');
  const checkedCnt = document.getElementById('selected-boxes');
  const selectedAll = document.getElementById('select-all');

  const checkedList = Array.from(cartList).filter(
    (product) => product.checked === true
  );
  let checkedTotalPrice = 0;

  if (local.lengthProducts() === checkedList.length) {
    selectedAll.checked = true;
  } else {
    selectedAll.checked = false;
  }

  Array.from(checkedList).forEach((product) => {
    checkedTotalPrice += parseInt(product.dataset.price, 10);
  });

  showCheckedTotalPrice.innerText = `${toCurrency(checkedTotalPrice)} 원`;
  checkedCnt.innerText = checkedList.length;
};

const addEvent = () => {
  const checkboxes = document.querySelectorAll('.cart-checkbox-part');

  Array.prototype.map.call(checkboxes, (box) => {
    box.addEventListener('change', getCheckedCnt);
  });
};

addEvent();
getCheckedCnt();
