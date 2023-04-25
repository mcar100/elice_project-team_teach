const addressComponent = `
<div class="address-info-user">
  <p id="user-name" class="address-info-user-name">{%RECIPIENT%}</p>
  <div class="address-info-user-default">
    <span class="address-info-zip-code">
      ({%ZIP_CODE%})
    </span>
    <span class="address-info-user-address">
      {%ADDRESS%}
    </span>
  </div>
  <p class="address-info-user-phone-number">{%PHONE_NUMBER%}</p>
</div>
<div class="address-info-user-require">
  <input
    type="text"
    name="delivery-require"
    id="{%USER_ID%}"
    placeholder="배송시 요청사항을 적어주세요."
    value=""
  />
</div>
`;

export default addressComponent;
