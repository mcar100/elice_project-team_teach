const headerContainer = document.querySelector("body");

async function categoryBar() {
    return `
    <div class="category-container">
        <div class="category-item"></div>
    </div>`
}

headerContainer.insertAdjacentHTML( 'beforeend', `
<div class="category-container">
    <div class="category-item"></div>
</div>`);


