import toCurrency from './utils.js';
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
  console.log(checkedList.length, local.lengthProducts());

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

// 오늘 중요한 걸 깨달았다. 모듈을 사용할 때는 함수 안에 로직이 있어야 한다. 당연하지만.
// 그냥 html에서 스크립트만 불러오고 함수 밖에 로직을 쓰면 그 애들은 한 번만 실행돼서 계속 이어나갈 수가 없음.
// 어쨋든 위에 방식처럼 쓰자!!! 쯔아~!

// Array.prototype.map.call(cartList, (product) =>
// 	product.addEventListener('change', getCheckedCnt)
// );
