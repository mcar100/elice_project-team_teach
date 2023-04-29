const orderDateAndNumber = `<p>주문일</p>
<p class="order-completed-date">{%ORDER_DATE%}</p>
<p>주문번호</p>
<p class="order-completed-number">{%ORDER_NUMBER%}</p>`;

const userInfo = `<table>
<tr>
	<td>이름</td>
	<td>{%USERNAME%}</td>
</tr>
<tr>
	<td>휴대폰</td>
	<td>{%PHONE_NUMBER%}</td>
</tr>
<tr>
	<td>배송주소</td>
	<td>{%ADDRESS%}</td>
</tr>
<tr>
	<td>배송요청사항</td>
	<td>{%REQUIRE%}</td>
</tr>
</table>`;

const paymentInfo = `<table>
<tr>
	<td>주문금액</td>
	<td>{%ORIGINAL_PRICE%}원</td>
</tr>
<tr>
	<td>할인금액</td>
	<td>{%DISCOUNTED_PRICE%}원</td>
</tr>
<tr>
	<td>배송비</td>
	<td>{%DELIVERY_FEE%}원</td>
</tr>
<tfoot>
	<td>총 결제금액</td>
	<td>{%TOTAL_PRICE%}원</td>
</tfoot>
</table>`;

export { orderDateAndNumber, userInfo, paymentInfo };
