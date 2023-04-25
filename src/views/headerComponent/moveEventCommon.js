function moveToOtherPage(path) {
  location.href = `${path}`;
}

function moveToHome() {
  const logoBtn = document.querySelector('.header-logo');
  logoBtn.addEventListener('click', () => {
    moveToOtherPage('/');
  });
}

function moveToLogin() {
  const registerBtn = document.querySelector('.nav-register-btn');
  registerBtn.addEventListener('click', () => {
    moveToOtherPage('/signin');
  });
}

function moveToMyPage() {
  const registerBtn = document.querySelector('.user-btn');
  registerBtn.addEventListener('click', () => {
    moveToOtherPage('/mypage');
  });
}

function moveToCart() {
  const registerBtn = document.querySelector('.cart-btn');
  registerBtn.addEventListener('click', () => {
    moveToOtherPage('/cart');
  });
}

function moveToCategoryByBar() {
  const registerBtn = document.querySelectorAll('.category-item');
  registerBtn.forEach((category) => {
    category.addEventListener('click', () => {
      moveToOtherPage('/category');
    });
  });
}

export function moveToOtherByHeader() {
  moveToHome();
  moveToLogin();
  moveToMyPage();
  moveToCart();
  moveToCategoryByBar();
}
