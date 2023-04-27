import { toCurrency } from './utils.js';

const replaceOrderInfoComponent = (component, data) => {
  const newComponent = component
    .replace(/{%ORDER_DATE%}/g, data.orderDate)
    .replace(/{%ORDER_NUMBER%}/g, data.orderNumber);

  return newComponent;
};

const replaceUserComponent = (component, data) => {
  console.log(data);
  const user = data.userData.length > 1 ? data.userData[1] : data.userData[0];

  console.log(user);
  const newComponent = component
    .replace(/{%USERNAME%}/g, user.username)
    .replace(/{%PHONE_NUMBER%}/g, user.mobileNumber)
    .replace(/{%ADDRESS%}/g, user.address)
    .replace(/{%REQUIRE%}/g, user.require);

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
