import { orderCancel } from './product.js';

const cancelOrderByButton = async () => {
  const orderContainers = document.querySelectorAll(
    '.order-check-item-container'
  );
  orderContainers.forEach((container) => {
    container.addEventListener('click', () => {
      const orderId = container.querySelector(
        '.order-check-item-head > span:nth-child(2)'
      ).innerText;
      orderCancel(orderId);
    });
  });
};

export { cancelOrderByButton };
