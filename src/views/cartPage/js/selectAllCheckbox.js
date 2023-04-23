/**
 * checkbox 전체 선택, 전체 해제 기능하다.
 */
const selectAllCheckbox = document.getElementById('select-all');

const selectAll = () => {
  const checkboxes = document.getElementsByName('cart-product');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked === true;
  });
};

export { selectAllCheckbox, selectAll };
