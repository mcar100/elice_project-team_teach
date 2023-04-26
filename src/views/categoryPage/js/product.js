const urlParams = new URL(location.href).searchParams;

const promises = async () => {
  const categoryId = urlParams.get('categoryId');
  console.log(categoryId);
  const response = await fetch(`http://localhost:8000/products`);
  const data = response.json();
  return data;
};

const getProduct = () => {
  const categoryId = urlParams.get('categoryId');
  const productList = document.querySelector('.product-list');
  promises().then((productArray) => {
    const filteredItem = productArray.filter(
      (item) => item.categoryId === categoryId
    );

    filteredItem.forEach((product) => {
      productList.innerHTML += `
      <div class="product-container">
          <div class="product-image">
              <img src="${product.images[0]}" alt="product image"/>
          </div>
          <div class="product-name">
              <span>${product.productName}</span>
          </div>
          <div class="product-price">
              <span>${product.pricePerMonth[0]}</span>
          </div>
          <div class="product-brand">
              <span>${product.productSpecification.brand}</span>
          </div>
          <div class="product-button">
  
          </div>
      </div>
          `;
    });
  });
};

export { getProduct };
