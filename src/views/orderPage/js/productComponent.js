const productComponent = `
<div class="main-container">
  <!-- order items -->
  <div class="order-products-container">
    <!-- product name -->
    <div class="order-product-seller">
      <p>{%SELLER%}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-house-door-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
        />
      </svg>
    </div>

    <!-- product info -->
    <p class="product-line"></p>
    <div class="order-product-info-container">
      <div class="order-product-image">
        <img src="{%IMAGE_SRC%}" alt="{%PRODUCT_NAME%}" />
      </div>
      <div class="order-product-info">
        <p class="order-product-name">
				{%PRODUCT_NAME%}
        </p>
        <div class="order-product-options">
					<p>{%MODEL%}</p>
					<p>{%COLOR%}</p>
					<p>{%SIZE%}</p>
					<p>{%ENERGY_EFFICIENCY_RATING%}</p>
        </div>
        <div class="order-product-quantity-container">
          <span class="order-product-quantity" name="amount">1 개</span>
        </div>
      </div>

      <div class="order-product-rental-period">
        <p class="order-product-rental-period-1">렌탈 개월 수</p>
        <p class="order-product-rental-period-2">{%RENTAL_PERIOD%} 개월</p>
      </div>

      <div class="order-product-price">
        <p class="order-product-price-1">월 납부 금액</p>
        <p class="order-product-price-2">{%PRICE_PER_MONTH%}</p>
      </div>

      <div class="order-product-delivery-fee">
        <p class="order-product-delivery-fee-1">배송비</p>
        <p class="order-product-delivery-fee-2">{%DELIVERY_FEE%}</p>
      </div>
    </div>
  </div>
  <p class="hidden-price-per-month {%HIDDEN_PRICE_PER_MONTH%}" style="display: none;"></p>
  <p class="hidden-delivery-fee {%HIDDEN_DELIVERY_FEE%}" style="display: none;"></p>
</div>
`;

export default productComponent;
