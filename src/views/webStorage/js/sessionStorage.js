/**
 * sessionStorage에 저장된 상품의 개수를 가져오는 함수
 * @returns {number} productId
 * @example
 * const productId = lengthProducts();
 * console.log(productId);
 */
const lengthProducts = () => sessionStorage.length;

/**
 * sessionStorage에 productId를 저장하는 함수.
 * key값은 lengthProducts() + 1로 설정
 * @param {string} productId
 */
const setProduct = (productId) => {
  sessionStorage.setItem(productId, productId);
};

/**
 *
 * @param {string} keyName
 * @param {object} userProductData
 */
const setUserProduct = (keyName, userProductData) => {
  sessionStorage.setItem(keyName, JSON.stringify(userProductData));
};

/**
 * sessionStorage에 저장된 productId를 가져오는 함수.
 *     - productId가 없으면 null을 반환
 * @param {string} productId
 * @returns {string} productId
 * @example
 * const productId = getProductId();
 * console.log(productId);
 */
const getProduct = (productId) => sessionStorage.getItem(productId);

/**
 * sessionStorage에 저장된 productId를 삭제하는 함수
 * 		- productId가 없으면 아무것도 하지 않음
 * @example
 * deleteProductId();
 * console.log(sessionStorage.length); // 0
 */
const deleteProduct = (productId) => {
  sessionStorage.removeItem(productId);
};

/**
 * sessionStorage에 저장된 productId를 모두 삭제하는 함수
 * @example
 * clearProducts();
 * console.log(sessionStorage.length); // 0
 */
const clearProducts = () => {
  sessionStorage.clear();
};

/**
 * sessionStorage에 저장된 product의 key값을 가져오는 함수
 * @param {number} index
 * @returns {string} key
 */
const getNameByKey = (index) => sessionStorage.key(index);

export {
  setProduct,
  setUserProduct,
  getProduct,
  deleteProduct,
  clearProducts,
  lengthProducts,
  getNameByKey,
};
