function moveToOtherPage(path) {
  window.location.href = `${path}`;
}

function moveToCategory() {
  const registerBtn = document.querySelectorAll('.main-category');
  registerBtn.forEach((category) => {
    category.addEventListener('click', (e) => {
      const p = e.currentTarget;
      const categoryId = p.querySelector('.category-id').innerText;
      moveToOtherPage(`/category?categoryId=${categoryId}`);
    });
  });
}

export function moveEvents() {
  moveToCategory();
}
