import * as local from '../../webStorage/js/localStorage.js';
import { selectAllCheckbox, selectAll } from './selectAllCheckbox.js';

const deleteBtn = document.querySelector('.select-all-right-container');

/**
 * checkbox 전체 선택, 전체 해제 기능
 * product를 부분적, 전체 삭제 기능
 */
const deleteProducts = () => {
  const cartList = document.getElementsByClassName('cart-checkbox-part');
  const checkedList = Array.prototype.filter.call(
    cartList,
    (product) => product.checked === true
  );

  if (checkedList.length === 0) {
    alert('삭제할 상품을 선택해주세요.');
  } else if (checkedList.length < cartList.length) {
    checkedList.forEach((product) => local.deleteProduct(product.id));
    alert(`${checkedList.length}개의 상품이 삭제되었습니다.`);
    window.location.reload();
  } else {
    local.clearProducts();
    alert(`장바구니의 상품이 전체 삭제되었습니다.`);
    window.location.reload();
  }
};

selectAllCheckbox.addEventListener('change', selectAll);
deleteBtn.addEventListener('click', deleteProducts);
