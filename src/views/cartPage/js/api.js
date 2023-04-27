import * as local from '../../webStorage/js/localStorage.js';

const productId = local.getProductId('productId');

fetch(`https://localhost/products/${productId}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
