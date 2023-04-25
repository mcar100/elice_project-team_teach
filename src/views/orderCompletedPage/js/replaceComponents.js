import toCurrency from './utils.js';

const replaceOrderInfoComponent = (component, data) => {
  const newComponent = component
    .replace(/{%ORDER_DATE%}/g, data.orderDate)
    .replace(/{%ORDER_NUMBER%}/g, data.orderNumber);

  return newComponent;
};

const replaceUserComponent = (component, data) => {
  const newComponent = component
    .replace(/{%USERNAME%}/g, data.username)
    .replace(/{%PHONE_NUMBER%}/g, data.mobileNumber)
    .replace(/{%ADDRESS%}/g, data.address)
    .replace(/{%REQUIRE%}/g, data.require);

  return newComponent;
};

const replaceProductComponents = (component, data) => {
  let originalPrice = 0;
  let discountedPrice = 0;
  let deliveryFee = 0;

  Array.from(data).forEach((productData) => {
    originalPrice +=
      productData.pricePerMonth +
      productData.pricePerMonth * (productData.discountRate / 100);
    discountedPrice +=
      productData.pricePerMonth * (productData.discountRate / 100);
    deliveryFee += productData.deliveryFee;
  });

  const newComponent = component
    .replace(/{%ORIGINAL_PRICE%}/g, toCurrency(originalPrice))
    .replace(/{%DISCOUNTED_PRICE%}/g, toCurrency(discountedPrice))
    .replace(/{%DELIVERY_FEE%}/g, toCurrency(deliveryFee))
    .replace(
      /{%TOTAL_PRICE%}/g,
      toCurrency(originalPrice - discountedPrice + deliveryFee)
    );

  return newComponent;
};

export {
  replaceOrderInfoComponent,
  replaceUserComponent,
  replaceProductComponents,
};
