const categoryBtn = document.getElementById("category-btn");
const categoryContainer = document.querySelector('.category-container');
categoryBtn.addEventListener("click", showCategoryList);

async function showCategoryList(){
    if(categoryContainer.style.visibility !== 'hidden'){
        categoryContainer.style.visibility = 'hidden';
    }
    else{
        categoryContainer.style.visibility = 'visible'
    }
}