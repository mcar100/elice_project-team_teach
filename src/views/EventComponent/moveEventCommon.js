function moveToOtherPage(path) {
  location.href = path;
}

export function moveToHome() {
  const logoBtn = document.querySelector('.header-logo');
  logoBtn.addEventListener('click', () => {
    moveToOtherPage('/');
  });
}

export function moveToLogin() {
  const registerBtn = document.querySelector('.nav-register-btn');
  registerBtn.addEventListener('click', () => {
    moveToOtherPage('/signin');
  });
}

export function moveToMyPage() {
  const registerBtn = document.querySelector('.user-btn');
  registerBtn.addEventListener('click', () => {
    moveToOtherPage('/mypage');
  });
}

export function moveToCart() {
  const registerBtn = document.querySelector('.cart-btn');
  registerBtn.addEventListener('click', () => {
    moveToOtherPage('/cart');
  });
}

export function moveToItemDetail() {
  const productContainers = document.querySelectorAll('.product-container');
  productContainers.forEach((product) => {
    product.addEventListener('click', () => {
      const productId = product.querySelector('.product-id').innerText;
      moveToOtherPage(`/product/detail?productId=${productId}`);
    });
  });
}

export function moveToCategoryByBar() {
  const registerBtn = document.querySelectorAll('.category-item');
  registerBtn.forEach((category) => {
    category.addEventListener('click', () => {
      const categoryId = category.querySelector('.category-id').innerText;
      moveToOtherPage(`/category?categoryId=${categoryId}`);
    });
  });
}

export function moveToCategoryBySelectBox(categoryId) {
  moveToOtherPage(`/category?categoryId=${categoryId}`);
}

export function moveToOtherByHeader() {
  moveToHome();
  moveToLogin();
  moveToMyPage();
  moveToCart();
  moveToCategoryByBar();
}
