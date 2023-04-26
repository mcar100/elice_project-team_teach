import { addEvents } from './eventManager.js';
/* 메인페이지에 적용할 카테고리 */
const mainCategoryList = document.getElementById('main-category-container');

const promises = async () => {
  const response = await fetch(`http://localhost:3000/categories`);
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
                ${item.categoryName}
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
