const promises = async () => {
  const response = await fetch(`http://34.22.85.74:3000/products`);
  const data = response.json();
  return data;
};

const getProduct = async (categoryId) => {
  const productList = document.querySelector('.product-list');
  await promises().then((productArray) => {
    const filteredItem = productArray.filter(
      (item) => item.categoryId === categoryId
    );

    filteredItem.forEach((product) => {
      productList.innerHTML += `
      <div class="product-container">
          <p class="product-id box-none">${product._id}</p>
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
