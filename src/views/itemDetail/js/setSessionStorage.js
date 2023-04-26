import * as session from '../../webStorage/js/sessionStorage.js';

const setProductToSessionStorage = (product) => {
  const { id } = product;

  console.log(id);

  session.setProductToCart(String(id), JSON.stringify(product));
};

export { setProductToSessionStorage };
