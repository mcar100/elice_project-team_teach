import * as getUser from './getUserId.js';
import * as session from '../../webStorage/js/sessionStorage.js';

const getUserData = async () => {
  const token = session.getProduct('techmate_token');

  if (!token) return -1;
  const { userId } = await getUser.getUserId(token);
  const userInfo = await getUser.getUserInfo(userId, token);

  return userInfo;
};

const getUserDataFromServer = async () => {
  const inContent = document.querySelector('input[name="delivery-require"]');
  const { value } = inContent || { value: '' };
  const data = [];
  const userData = await getUserData();

  if (userData !== -1) userData.require = value;

  data.push(userData);
  return data;
};

export default getUserDataFromServer;
