// eslint-disable-next-line node/no-unsupported-features/es-syntax
import { initSetting } from './index.js';

// console.log('api.js start');

const getProductFromServer = async (productId) => {
  const res = await fetch(`http://localhost:3000/products/${productId}`);
  const product = await res.json();

  // console.log(product);
  return product;
};

window.onload = async () => {
  //const id = '6448a376f29a0bd92b12c79f';
  const urlParams = new URL(window.location.href).searchParams;
  const id = urlParams.get('productId');
  const itemData = await getProductFromServer(id);

  initSetting(itemData);
};
