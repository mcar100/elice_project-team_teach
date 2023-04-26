import { moveToCategoryByBar } from '../moveEventCommon.js';
import { getCategories } from './categories.js';

function toggleCategoryContainer() {
  const categoryContainer = document.querySelector('.category-container');

  const className = 'category-container-clicked';
  categoryContainer.classList.toggle(className);
}

function makeCategoryBar() {
  const headerContainer = document.getElementById('header-container');
  const headerLogo = document.querySelector('.header-logo');
  const container = document.createElement('div');
  container.classList.add('category-container');

  headerLogo.insertAdjacentHTML(
    'beforebegin',
    `
    <button id="category-btn">
        <img src="../../mainPage/icon/menu.png" alt="category icon" />
    </button>
    `
  );

  container.insertAdjacentHTML(
    `beforeend`,
    `
        <div class="category-title">
            <span>Category</span>
            <button id="category-close-btn">
            <img src="../../mainPage/icon/free-icon-close-window-6583137.png" alt="close icon"/>
            </button>
        </div>
    `
  );

  getCategories()
    .then((items) => {
      items.forEach(({ _id, categoryIcon, categoryName }) => {
        container.insertAdjacentHTML(
          `beforeend`,
          `<div class="category-item">
                <a ref="/category">
                <img src="${categoryIcon}" alt="${categoryName} icon"/>
                <span>${categoryName}</span>
                <img src="../../mainPage/icon/free-icon-arrow-right-6423875.png" alt="arrow icon"/> 
                <p class="category-id box-none">${_id}</p>
                </a>
            </div>
          `
        );
      });
    })
    .then(() => {
      moveToCategoryByBar();
    })
    .catch((err) => console.log(err));
  headerContainer.appendChild(container);
}

async function addCategoryBar() {
  await makeCategoryBar();

  const categoryBtn = document.getElementById('category-btn');
  const closeBtn = document.getElementById('category-close-btn');

  categoryBtn.addEventListener('click', toggleCategoryContainer);
  closeBtn.addEventListener('click', toggleCategoryContainer);
}

export { addCategoryBar };
