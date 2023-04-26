import * as local from '../../webStorage/js/localStorage.js';

const localStorageKeys = Object.keys(localStorage);
// 로컬스토리지가 뒤죽박죽 된다. 순서를 보장하지 않는다. 그래서 정렬해주는 코드
const sortedKeys = localStorageKeys.sort();

/**
 * localStorage에 저장된 상품 정보를 가져오고
 * 데이터를 서버에 요청한다.
 */
// 아하 그냥 위에 코드에서 async, await로 기다려주고 promise로 기다려주는 거구나.
const getDataFromLocalStorage = () => {
  // const promises = sortedKeys.map(async (keyName) => {
  //   const response = await fetch(
  //     `http://localhost:3000/products/${local.getProduct(keyName)}`
  //   );
  //   const data = await response.json();
  //   return data;
  // });
  // const productsInfo = await Promise.all(promises);
  // return productsInfo;
  const arr = [];
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    arr.push(JSON.parse(localStorage.getItem(key)));
  });
  return arr;
};

const getDataFromServerOne = async (keyName) => {
  const response = await fetch(
    `http://localhost:3000/products/${local.getProduct(keyName)}`
  );
  const data = await response.json();
  return data;
};

export { getDataFromLocalStorage, getDataFromServerOne };
