import toCurrency from './utils.js';

/**
 * checkbox 전체 선택, 전체 해제 기능하다.
 */
const selectAllCheckbox = document.getElementById('select-all');
const showCheckedTotalPrice = document.getElementById('total-order-price');

const selectAll = () => {
  const checkboxes = document.getElementsByName('cart-product');
  let checkedTotalPrice = 0;

  checkboxes.forEach((product) => {
    product.checked = selectAllCheckbox.checked === true;
    checkedTotalPrice += parseInt(product.dataset.price, 10);
  });

  if (selectAllCheckbox.checked === true) {
    showCheckedTotalPrice.innerText = `${toCurrency(checkedTotalPrice)} 원`;
    document.getElementById('selected-boxes').innerText = checkboxes.length;
  } else {
    showCheckedTotalPrice.innerText = '0 원';
    document.getElementById('selected-boxes').innerText = 0;
  }
};

export { selectAllCheckbox, selectAll };
