import * as local from '../../webStorage/js/localStorage.js';

/**
 * localStorage에 저장된 상품 정보를 가져오고
 * 데이터를 서버에 요청한다.
 */
const getDataFromLocalStorage = () => {
  const arr = [];
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    arr.push(JSON.parse(localStorage.getItem(key)));
  });
  return arr;
};

const getDataFromServerOne = async (keyName) => {
  const response = await fetch(
    `http://kdt-sw-4-team15:3000/products/${local.getProduct(keyName)}`
  );
  const data = await response.json();
  return data;
};

export { getDataFromLocalStorage, getDataFromServerOne };
