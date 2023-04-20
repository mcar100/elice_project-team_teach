import { categories } from '../../headerComponent/categoryList/categories.js';

/* 메인페이지에 적용할 카테고리 */
const mainCategoryList = document.getElementById("main-category-container");

function getMainCategoryData() {
  categories.forEach((item) => {
    mainCategoryList.insertAdjacentHTML(
      'beforeend',
      `<div class="main-category">
            <a ref="/">
            <img src="${item.iconSrc}" alt="${item.type} icon"/>
            ${item.type}
            </a>
      </div>`
    );
  });
}

export { getMainCategoryData };
