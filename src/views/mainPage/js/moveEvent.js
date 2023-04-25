function moveToOtherPage(path) {
  location.href = `${path}`;
}

function moveToCategory() {
  const registerBtn = document.querySelectorAll('.main-category');
  registerBtn.forEach((category) => {
    category.addEventListener('click', () => {
      moveToOtherPage('/category');
    });
  });
}

export function moveEvents() {
  moveToCategory();
}
