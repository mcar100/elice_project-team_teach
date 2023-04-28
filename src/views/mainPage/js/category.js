import { addEvents } from './eventManager.js';
/* 메인페이지에 적용할 카테고리 */
const mainCategoryList = document.getElementById('main-category-container');

const port = 3000;
const promises = async () => {
  const response = await fetch(`http://34.22.85.74:${port}/categories`);
  const data = response.json();
  return data;
};

const getMainCategoryData = () => {
  promises()
    .then((categories) => {
      categories.forEach((item) => {
        mainCategoryList.insertAdjacentHTML(
          'beforeend',
          `<div class="main-category">
                <a ref="/category">
                <img src="${item.categoryIcon}" alt="${item.categoryName} icon"/>
                <span>${item.categoryName}</span>
                </a>
                <p class="category-id box-none" >${item._id}</p>
          </div>`
        );
      });
    })
    .then(() => {
      addEvents();
    })
    .catch((err) => console.log(err));
};
export { getMainCategoryData };
