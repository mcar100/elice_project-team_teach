import * as session from '../../webStorage/js/sessionStorage.js';

const localStorageKeys = Object.keys(sessionStorage);
const sortedKeys = localStorageKeys.sort();

/**
 * sessionStorage에 저장된 상품 정보를 가져오고
 * 데이터를 서버에 요청한다.
 */
const getDataFromServer = async () => {
  const promises = sortedKeys.map(async (keyName) => {
    if (session.getProduct(keyName) !== 'true') {
      const response = await fetch(
        `http://localhost:3000/products/${session.getProduct(keyName)}`
      );
      const data = await response.json();
      return data;
    }
    return -1;
  });
  const productsInfo = await Promise.all(promises);
  return productsInfo;
};

export default getDataFromServer;
