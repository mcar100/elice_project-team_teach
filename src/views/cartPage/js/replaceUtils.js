import toCurrency from './utils.js';

const replaceComponentData = (productsData, productComponent) => {
  let productsHtmlForRender = '';
  productsData.forEach((product) => {
    const originalPrice =
      product.pricePerMonth +
      Math.floor((product.pricePerMonth * product.discountRate) / 100);
    productsHtmlForRender += productComponent
      .replace(/{%IMAGE_SRC%}/g, product.imageSrc)
      .replace(/{%PRODUCT_ID%}/g, `${product.productId}`)
      .replace(/{%SELLER%}/g, product.seller)
      .replace(/{%PRODUCT_NAME%}/g, product.productName)
      .replace(/{%MODEL%}/g, `모델명 : ${product.productSpecification.model}`)
      .replace(/{%SIZE%}/g, `사이즈 :  ${product.productSpecification.size}`)
      .replace(
        /{%ENERGY_EFFICIENCY_RATING%}/g,
        `에너지 효율 등급 : ${product.productSpecification.energyEfficiencyRating}`
      )
      .replace(/{%RENTAL_PERIOD%}/g, product.rentalPeriod)
      .replace(
        /{%DELIVERY_FEE%}/g,
        product.deliveryFee ? `${toCurrency(product.deliveryFee)} 원` : '무료'
      )
      .replace(/{%INPUT_PRICE_PER_MONTH%}/g, product.pricePerMonth)
      .replace(
        /{%PRICE_PER_MONTH%}/g,
        `${toCurrency(product.pricePerMonth)} 원`
      )
      .replace(/{%ORIGINAL_PRICE%}/g, `${toCurrency(originalPrice)} 원`)
      .replace(
        /{%DISCOUNTED_PRICE%}/g,
        `${toCurrency(originalPrice - product.pricePerMonth)} 원`
      );
  });
  return productsHtmlForRender;
};

export default replaceComponentData;
