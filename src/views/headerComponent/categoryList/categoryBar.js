import { getCategory } from './categories.js';

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

  const categories = getCategory();

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

  categories.forEach(({ type, iconSrc }) => {
    container.insertAdjacentHTML(
      `beforeend`,
      `<div class="category-item">
              <a ref="/">
              <img src="${iconSrc}" alt="${type} icon"/>
              <span>${type}</span>
              <img src="../../mainPage/icon/free-icon-arrow-right-6423875.png" alt="arrow icon"/> 
              </a>
          </div>
        `
    );
  });

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
