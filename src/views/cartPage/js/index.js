/**
 * checkbox 전체 선택, 전체 해제 기능
 */
const allSelectCheckbox = document.getElementById('select-all');

const selectAll = () => {
  const checkboxes = document.getElementsByName('cart-product');

  checkboxes.forEach((checkbox) => {
    // Bad
    // checkbox.checked = allSelectCheckbox.checked ? true : false;
    // Good
    // 조건에 따라 true false 로 나타내고 싶을 때는 아래처럼 쓰면 되겠구나
    /**
     * Same code
     * if (allSelectCheckbox.checked === 1)
     *   allSelectCheckbox.checked = true;
     * else
     *   allSelectCheckbox.checked = false;
     */
    checkbox.checked = allSelectCheckbox.checked === 1;
  });
};

allSelectCheckbox.addEventListener('change', selectAll);
