/**
 * checkbox 전체 선택, 전체 해제 기능
 */
const allSelectCheckbox = document.getElementById('select-all');

const selectAll = () => {
  const checkboxes = document.getElementsByName('cart-product');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = allSelectCheckbox.checked ? true : false;
  });
};

allSelectCheckbox.addEventListener('change', selectAll);
