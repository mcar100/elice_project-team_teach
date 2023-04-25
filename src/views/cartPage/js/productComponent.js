const productComponent = `<!-- component possible -->
<!-- product -->
<div class="main-container">
	<p class="product-id" style="display: none">{%PRODUCT_ID%}</p>
	<!-- cart items -->
	<div class="cart-products-container">
		<!-- product name -->
		<div class="cart-product-seller">
			<input
				type="checkbox"
				name="cart-product"
				id="{%PRODUCT_ID%}"
				class="cart-checkbox-part"
				onchange="getCheckedCnt()"
				data-price="{%INPUT_PRICE_PER_MONTH%}"
			/>
			<label for="{%PRODUCT_ID%}">{%SELLER%}</label>
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
		<div class="cart-product-info-container">
			<div class="cart-product-image">
				<img src="{%IMAGE_SRC%}" alt="{%PRODUCT_NAME%}" />
			</div>
			<div class="cart-product-info">
				<p class="cart-product-name">{%PRODUCT_NAME%}</p>
				<div class="cart-product-options">
					<p>{%MODEL%}</p>
					<p>{%SIZE%}</p>
					<p>{%ENERGY_EFFICIENCY_RATING%}</p>
				</div>
				<div class="cart-product-quantity-container">
					<span class="cart-product-quantity" name="amount">1 개</span>
				</div>
			</div>

			<div class="cart-product-rental-period">
				<p class="cart-product-rental-period-1">렌탈 개월 수</p>
				<p class="cart-product-rental-period-2">{%RENTAL_PERIOD%} 개월</p>
			</div>

			<div class="cart-product-price">
				<p class="cart-product-price-1">월 납부 금액</p>
				<p class="cart-product-price-2">{%PRICE_PER_MONTH%}</p>
			</div>

			<div class="cart-product-delivery-fee">
				<p class="cart-product-delivery-fee-1">배송비</p>
				<p class="cart-product-delivery-fee-2">{%DELIVERY_FEE%}</p>
			</div>
		</div>

		<!-- product price info -->
		<div class="cart-product-price-info-outer">
			<div class="cart-product-price-info-left">
				<div>
					<p class="cart-product-price-info-left-1">선택상품금액</p>
					<p class="cart-product-price-info-left-2">{%ORIGINAL_PRICE%}</p>
				</div>
				<div>
					<p class="cart-product-price-info-left-1">총 배송비</p>
					<p class="cart-product-price-info-left-2">{%DELIVERY_FEE%}</p>
				</div>
				<div>
					<p class="cart-product-price-info-left-1">할인예상금액</p>
					<p class="cart-product-price-info-left-2 discounted-price">
						{%DISCOUNTED_PRICE%}
					</p>
				</div>
			</div>
			<div class="cart-product-price-info-right">
				<div class="cart-product-final-price">
					<p class="final-price-text">주문금액</p>
					<p class="final-price">{%PRICE_PER_MONTH%}</p>
				</div>
				<a href="../../orderPage/html/index.html" class="each-order-a">
					<p class="each-order-button {%PRODUCT_ID%}">주문하기</p>
				</a>
			</div>
		</div>
	</div>
</div>`;

export default productComponent;
