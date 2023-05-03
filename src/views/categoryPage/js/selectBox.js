import { getUrlParams } from './getUrlParams.js';
import { getProduct } from './product.js';
import { sendItemDetail } from './selectItem.js';
import { getCategories } from '../../headerComponent/categoryList/categories.js';

const selectBox = document.getElementById('select-category');

function addOptionToSelectBox() {
  const categories = getCategories();
  categories.then((items) => {
    items.forEach(({ _id, categoryName }) => {
      selectBox.innerHTML += `<option value="${_id}">${categoryName}</option>`;
    });
  });
}

function initSelectBox() {
  const optionList = document.querySelectorAll('option');
  optionList.forEach((option) => {
    if (option.value === getUrlParams('categoryId')) {
      option.setAttribute('selected', 'true');
    }
  });
}

function selectCategory() {
  selectBox.addEventListener('change', () => {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';
    const categoryId = selectBox.value;

    getProduct(categoryId).then(() => {
      sendItemDetail();
      history.pushState(null, null, `category?categoryId=${categoryId}`);
    });
  });
}

const selectBoxEvent = () => {
  addOptionToSelectBox();
  initSelectBox();
  selectCategory();
};

export { selectBoxEvent };
