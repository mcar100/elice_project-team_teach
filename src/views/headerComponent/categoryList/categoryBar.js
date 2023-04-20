import { categories } from "./categories.js";
const categoryBtn = document.getElementById("category-btn");

export async function addCategoryBar(){
    await makeCategoryBar();

    const categoryContainer = document.querySelector('.category-container');
    const closeBtn = document.getElementById("category-close-btn");
    categoryBtn.addEventListener("click", ()=>{
        const className = 'category-container-clicked';
        categoryContainer.classList.toggle(className);
    });
    closeBtn.addEventListener("click", ()=>{
        const className = 'category-container-clicked';
        categoryContainer.classList.toggle(className);
    });

}

async function makeCategoryBar() {
    const headerContainer = document.querySelector("header");
    const container = document.createElement('div');
    container.classList.add('category-container');
    container.insertAdjacentHTML(`beforeend`,`
        <div class="category-title">
            <span>Category</span>
            <button id="category-close-btn">
            <img src="../../mainPage/icon/free-icon-close-window-6583137.png" alt="close icon"/>
            </button>
        </div>
    `)

    categories.map(({type, iconSrc})=>{
        container.insertAdjacentHTML(`beforeend`,
        `<div class="category-item">
              <a ref="/">
              <img src="${iconSrc}" alt="${type} icon"/>
              <span>${type}</span>
              <img src="../../mainPage/icon/free-icon-arrow-right-6423875.png" alt="arrow icon"/> 
              </a>
          </div>
        `);  
      })
      
    headerContainer.appendChild(container);
}





