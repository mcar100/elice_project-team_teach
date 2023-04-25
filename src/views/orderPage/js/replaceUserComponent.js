import getUserDataFromServer from './getUserDataFromServer.js';
import addressComponent from './userComponent.js';
import replaceUserComponent from './replaceUserUtils.js';

const addressInfoTag = document.querySelector('.address-info-default-display');

const addUserMainContents = async () => {
  const userData = await getUserDataFromServer();

  const userHtmlForRender = replaceUserComponent(userData, addressComponent);
  addressInfoTag.innerHTML = userHtmlForRender;
};

export default addUserMainContents;
