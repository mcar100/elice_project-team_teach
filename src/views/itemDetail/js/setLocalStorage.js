import * as local from '../../webStorage/js/localStorage.js';

const setProductToLocalStorage = (product) => {
  const { _id } = product;
  local.setProductToCart(String(_id), JSON.stringify(product));
};

export { setProductToLocalStorage };
