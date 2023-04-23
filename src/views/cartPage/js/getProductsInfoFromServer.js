import * as local from '../../webStorage/js/localStorage.js';

const localStorageKeys = Object.keys(localStorage);
const sortedKeys = localStorageKeys.sort();

/**
 * localStorage에 저장된 상품 정보를 가져오고
 * 데이터를 서버에 요청한다.
 */
sortedKeys.forEach((keyName) => {
  console.log(keyName, local.getProduct(keyName));
});
