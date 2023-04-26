import toCurrency from './utils.js';

const replaceProductComponent = (productsData, productComponent) => {
  let productsHtmlForRender = '';
  productsData.forEach((productObject) => {
    const product = JSON.parse(productObject.value);

    productsHtmlForRender += productComponent
      .replace(/{%IMAGE_SRC%}/g, product.images)
      .replace(/{%PRODUCT_ID%}/g, `${product._id}`)
      .replace(/{%SELLER%}/g, product.brand)
      .replace(/{%PRODUCT_NAME%}/g, product.productName)
      .replace(/{%MODEL%}/g, `모델명 : ${product.model}`)
      .replace(/{%SIZE%}/g, `사이즈 :  ${product.size}`)
      .replace(/{%COLOR%}/g, `색상 :  ${product.color}`)
      .replace(
        /{%ENERGY_EFFICIENCY_RATING%}/g,
        `에너지 효율 등급 : ${product.energyEfficiencyRating}`
      )
      .replace(/{%RENTAL_PERIOD%}/g, product.rentalPeriod)
      .replace(
        /{%DELIVERY_FEE%}/g,
        product.deliveryFee ? `${toCurrency(product.deliveryFee)} 원` : '무료'
      )
      .replace(
        /{%PRICE_PER_MONTH%}/g,
        `${toCurrency(product.pricePerMonth)} 원`
      )
      .replace(/{%HIDDEN_PRICE_PER_MONTH%}/g, product.pricePerMonth)
      .replace(/{%HIDDEN_DELIVERY_FEE%}/g, product.deliveryFee);
  });
  return productsHtmlForRender;
};

export default replaceProductComponent;

// userInfo: [
//   {
//     "_id": "128789471",
//     "username": "임지성",
//     "address": "서울시 강남구 역삼동 123-45 101호",
//     "mobileNumber": "010-1234-5678"
//   }
// ]

/**
 * USERNAME - username
 * ZIP_CODE - zipCode
 * ADDRESS - address
 * PHONE_NUMBER - mobileNumber
 * USER_ID - _id
 */
