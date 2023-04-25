import { header } from '../../headerComponent/header.js';
import { getProduct } from './product.js';

const productList = document.querySelector('.product-list');
header();

async function addProduct() {
  const productArray = getProduct();
  productArray.forEach(
    ({
      productNumber,
      productName,
      pricePerMonth,
      productSpecification,
      images,
    }) => {
      productList.innerHTML += `
    <div class="product-container">
        <div class="product-image">
            <img src="${images[0]}" alt="${productNumber} image"/>
        </div>
        <div class="product-name">
            <span>${productName}</span>
        </div>
        <div class="product-price">
            <span>${pricePerMonth[2]}</span>
        </div>
        <div class="product-brand">
            <span>${productSpecification.brand}</span>
        </div>
        <div class="product-button">

        </div>
    </div>
        `;
    }
  );
}
addProduct();
