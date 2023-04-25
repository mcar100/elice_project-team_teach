const buttonContainer = document.getElementById('button-container');
function addButtonBar() {
  buttonContainer.innerHTML = `
    <button class="user-btn">
        <img src="../../mainPage/icon/free-icon-user-747376.png" alt="user icon" />
    </button>
    <button class="cart-btn">
        <img src="../../mainPage/icon/free-icon-add-cart-8122483.png" alt="cart icon" />
    </button>
    `;
}

export { addButtonBar };
