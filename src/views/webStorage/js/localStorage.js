/**
 * localStorage에 저장된 상품의 개수를 가져오는 함수
 * @returns {number} productId
 * @example
 * const productId = lengthProducts();
 * console.log(productId);
 */
const lengthProducts = () => {
  let localStorageLength = 0;

  const keys = Object.keys(localStorage);
  keys.forEach((product) => {
    if (product.length === 24) localStorageLength++;
  });
  return localStorageLength;
};

/**
 * localStorage에 상품을 저장하는 함수
 * @param {*} productKey
 * @param {*} productValue
 */
const setProduct = (productKey, productValue) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(productKey, productValue);
  }
};

/**
 * localStorage에 저장된 productId를 가져오는 함수.
 *     - productId가 없으면 null을 반환
 * @param {string} productId
 * @returns {string} productId
 * @example
 * const productId = getProductId();
 * console.log(productId);
 */
const getProduct = (productId) => localStorage.getItem(productId);

/**
 * localStorage에 저장된 productId를 삭제하는 함수
 * 		- productId가 없으면 아무것도 하지 않음
 * @example
 * deleteProductId();
 * console.log(localStorage.length); // 0
 */
const deleteProduct = (productId) => {
  localStorage.removeItem(productId);
};

/**
 * localStorage에 저장된 productId를 모두 삭제하는 함수
 * @example
 * clearProducts();
 * console.log(localStorage.length); // 0
 */
const clearProducts = () => {
  localStorage.clear();
};

/**
 * localStorage에 저장된 product의 key값을 가져오는 함수
 * @param {number} index
 * @returns {string} key
 */
const getNameByKey = (index) => localStorage.key(index);

export {
  setProduct,
  getProduct,
  deleteProduct,
  clearProducts,
  lengthProducts,
  getNameByKey,
};
