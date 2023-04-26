import * as session from '../../webStorage/js/sessionStorage.js';

const setProductToSessionStorage = (product) => {
  const { _id } = product;

  session.setProductToCart(String(_id), JSON.stringify(product));
};

export { setProductToSessionStorage };
