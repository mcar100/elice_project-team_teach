import getUserDataFromServer from './getUserDataFromServer.js';
import addressComponent from './userComponent.js';
import replaceUserComponent from './replaceUserUtils.js';

const addDefault = (userData) => {
  const addressInfoTag = document.querySelector(
    '.address-info-default-display'
  );

  const userHtmlForRender = replaceUserComponent(userData, addressComponent);
  addressInfoTag.innerHTML = userHtmlForRender;
};

const addUserMainContents = async () => {
  const displayed = document.getElementById('default-display');

  const userData = await getUserDataFromServer();

  if (userData === -1) return -1;
  if (displayed.checked) addDefault(userData);
  else {
    const directInput = {};

    const userName = document.querySelector('input[name="user-name-none"]');
    const userZipCode = document.getElementById('user-zip-code');
    const userAddress = document.getElementById('user-address');
    const userAddressDetail = document.getElementById('user-address-detail');
    const userPhonNumber = document.getElementById('user-phone-number');
    const userRequire = document.getElementById('user-require');

    directInput.username = userName.value;
    directInput.zipCode = userZipCode.value;
    directInput.address = userAddress.value + userAddressDetail.value;
    directInput.mobileNumber = userPhonNumber.value;
    directInput.require = userRequire.value;

    userData.push(directInput);
  }

  return userData;
};

export default addUserMainContents;
