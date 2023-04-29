import { toCurrency } from './utils.js';

const totalPriceInfoFunc = () => {
  const totalPriceInfo = document.querySelector('.final-confirmation-price-2');
  const pricesArr = document.querySelectorAll('.hidden-price-per-month');
  const deliveryFeesArr = document.querySelectorAll('.hidden-delivery-fee');
  let totalPrice = 0;
  let totalDeliveryFee = 0;

  Array.from(pricesArr).forEach((element) => {
    totalPrice += Number(element.className.split(' ')[1]);
  });
  Array.from(deliveryFeesArr).forEach((element) => {
    totalDeliveryFee += Number(element.className.split(' ')[1]);
  });
  totalPriceInfo.textContent = `${toCurrency(
    totalPrice + totalDeliveryFee
  )} 원`;
};

export default totalPriceInfoFunc;
