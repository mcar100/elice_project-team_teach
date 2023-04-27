import { toCurrency } from './utils.js';

const replaceComponentData = (productsData, productComponent) => {
  let productsHtmlForRender = '';
  productsData.forEach((product) => {
    const originalPrice =
      product.pricePerMonth +
      Math.floor((product.pricePerMonth * product.discountRate) / 100);
    const orderPrice =
      originalPrice -
      (originalPrice - product.pricePerMonth) +
      product.deliveryFee;

    productsHtmlForRender += productComponent
      .replace(/{%IMAGE_SRC%}/g, product.images)
      .replace(/{%PRODUCT_ID%}/g, `${product._id}`)
      .replace(/{%PRODUCT_NAME%}/g, product.productName)
      .replace(/{%SELLER%}/g, product.brand)
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
      .replace(/{%INPUT_PRICE_PER_MONTH%}/g, product.pricePerMonth)
      .replace(
        /{%PRICE_PER_MONTH%}/g,
        `${toCurrency(product.pricePerMonth)} 원`
      )
      .replace(/{%ORIGINAL_PRICE%}/g, `${toCurrency(originalPrice)} 원`)
      .replace(
        /{%DISCOUNTED_PRICE%}/g,
        `${toCurrency(originalPrice - product.pricePerMonth)} 원`
      )
      .replace(/{%ORDER_PRICE%}/g, `${toCurrency(orderPrice)} 원`)
      .replace(/{%ORDER_PRICE_DATA%}/g, `${orderPrice}`);
  });
  return productsHtmlForRender;
};

export default replaceComponentData;
