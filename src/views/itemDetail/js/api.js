import { initSetting } from './index.js';

const getProductFromServer = async (productId) => {
  const res = await fetch(`http://34.22.85.74:3000/products/${productId}`);
  const product = await res.json();

  return product;
};

window.onload = async () => {
  const urlParams = new URL(window.location.href).searchParams;
  const id = urlParams.get('productId');
  const itemData = await getProductFromServer(id);

  initSetting(itemData);
};
