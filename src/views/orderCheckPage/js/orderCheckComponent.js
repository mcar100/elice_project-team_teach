import { getProduct } from './product.js';

const orderCheckList = document.querySelector('.order-check-list-body');

async function addOrderCheck() {
  const productArray = getProduct();
  productArray.forEach(
    ({ productNumber, productName, pricePerMonth, images }) => {
      orderCheckList.innerHTML += `
      <div class="order-check-item-container">
      <div class="order-check-item-head">
        <span>주문일자 2023.04.22</span>
        <span>orderNumber</span>
      </div>
      <div class="order-check-item-body">
        <img
          src="${images[0]}"
          alt="${productNumber} image"
        />
        <div class="order-check-item-info">
          <span>${productName}</span>
          <span>${pricePerMonth}</span>
        </div>
        <div class="order-check-item-deliver">
          <span>배송 상태</span>
          <span class="order-check-item-deliver-state">배송 중</span>
        </div>
        <div class="order-check-button-box">
          <button class="return-btn">반납</button>
          <button class="check-order-btn">배송 조회</button>
          <button class="order-cancel-btn">주문 취소</button>
        </div>
      </div>
    </div>
        `;
    }
  );
}

// eslint-disable-next-line node/no-unsupported-features/es-syntax
export { addOrderCheck };
