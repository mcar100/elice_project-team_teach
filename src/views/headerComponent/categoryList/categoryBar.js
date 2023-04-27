import { moveToCategoryByBar } from '../../EventComponent/moveEventCommon.js';
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
      <svg width="26px" height="26px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="align-justify"> <g> <polygon fill="#ffffff" points="20 18 4 18 4 18 20 18 20 18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> <polygon fill="#ffffff" points="20 14 4 14 4 14 20 14 20 14" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> <polygon fill="#ffffff" points="20 10 4 10 4 10 20 10 20 10" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> <polygon fill="#ffffff" points="20 6 4 6 4 6 20 6 20 6" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg>
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
