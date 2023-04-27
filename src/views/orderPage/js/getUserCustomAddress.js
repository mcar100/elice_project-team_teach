const userName = document.querySelector('input[name="user-name"]');
const zipCode = document.querySelector('input[name="user-zip-code"]');
const addressNormal = document.querySelector('input[name="user-address"]');
const addressDetail = document.querySelector(
  'input[name="user-address-detail"]'
);
const address = `${addressNormal.value} ${addressDetail.value}`;
const mobileNumber = document.querySelector('input[name="user-phone-number"]');
const userRequire = document.querySelector(
  'input[class="address-info-direct-none-delivery-require"]'
);

const userCustomAddress = {
  userName,
  zipCode,
  address,
  mobileNumber,
  userRequire,
};

export default userCustomAddress;
