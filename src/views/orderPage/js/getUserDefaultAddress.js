const userName = document.getElementById('user-name');
const zipCode = document.querySelector('.address-info-zip-code');
const address = document.querySelector('.address-info-user-address');
const mobileNumber = document.querySelector('.address-info-user-phone-number');
const userRequire = document.querySelector('input[name="delivery-require"]');

const userDefaultAddress = {
  userName,
  zipCode,
  address,
  mobileNumber,
  userRequire,
};

export default userDefaultAddress;
