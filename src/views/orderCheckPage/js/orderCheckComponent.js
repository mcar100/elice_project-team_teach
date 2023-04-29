import { orderCheck } from './product.js';

const orderCheckList = document.querySelector('.order-check-list-body');

async function addOrderCheck() {
  const productArray = await orderCheck();
  productArray.forEach((product) => {
    const productdate = product.createdAt.split('T');
    orderCheckList.innerHTML += `
      <div class="order-check-item-container">
      <div class="order-check-item-head">
        <span>${productdate[0]}</span>
        <span>${product._id}</span>
      </div>
      <div class="order-check-item-body">
        <img
          src="/mainPage/icon/box.png"
          alt="product image"
        />
        <div class="order-check-item-info">
          <span>${product.productName}</span>
          <span>가격: ${product.productInfo.pricePerMonth} (${product.productInfo.rentalPeriod}개월)</span>
          <span>배송지: ${product.address.address1}</span>
        </div>
        <div class="order-check-item-deliver">
          <span>배송 상태</span>
          <span class="order-check-item-deliver-state">${product.deliveryStatus}</span>
          <span>수령자</span>
          <span class="order-check-item-receiver">${product.address.receiverName}</span>
        </div>
        <div class="order-check-button-box">
          <button class="order-cancel-btn">주문 취소</button>
        </div>
      </div>
    </div>
        `;
  });
}

// eslint-disable-next-line node/no-unsupported-features/es-syntax
export { addOrderCheck };
