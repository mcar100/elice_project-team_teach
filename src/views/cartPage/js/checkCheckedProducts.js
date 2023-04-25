const cartList = document.getElementsByClassName('cart-checkbox-part');
const checkedCnt = document.getElementById('selected-boxes');
const showCheckedTotalPrice = document.getElementById('total-order-price');

const toCurrency = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const getCheckedCnt = () => {
  const checkedList = Array.from(cartList).filter(
    (product) => product.checked === true
  );
  let checkedTotalPrice = 0;

  Array.from(checkedList).forEach((product) => {
    checkedTotalPrice += parseInt(product.dataset.price, 10);
  });

  showCheckedTotalPrice.innerText = `${toCurrency(checkedTotalPrice)} 원`;
  checkedCnt.innerText = checkedList.length;
};

getCheckedCnt();

// Array.prototype.map.call(cartList, (product) =>
// 	product.addEventListener('change', getCheckedCnt)
// );
