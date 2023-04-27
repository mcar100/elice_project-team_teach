import * as getData from './getUserId.js';
import * as session from '../../webStorage/js/sessionStorage.js';

const getUserData = async () => {
  const token = session.getProduct('token');

  const { userId } = await getData.getUserId(token);
  const userInfo = await getData.getUserInfo(userId, token);

  return userInfo;
};

const getUserDataFromServer = async () => {
  const inContent = document.querySelector('input[name="delivery-require"]');
  const { value } = inContent;
  const data = [];
  const userData = await getUserData();

  userData.require = value;

  data.push(userData);
  return data;
};

export default getUserDataFromServer;
