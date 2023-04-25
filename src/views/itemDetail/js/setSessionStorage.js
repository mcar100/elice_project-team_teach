import * as session from '../../webStorage/js/sessionStorage.js';

const addCurrentBtn = document.getElementById('current-buy');

const setProductIdToSessionStorage = () => {
  console.log("session press");
  //session.setProduct(product);
};

addCartBtn.addEventListener('click', setProductIdToSessionStorage);
