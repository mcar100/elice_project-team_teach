import * as session from '../../webStorage/js/sessionStorage.js';

const getDataFromServer = async () => {
  const sessionData = [];

  for (let i = 0; i < session.lengthProducts(); i++) {
    const key = session.getNameByKey(i);
    const value = session.getProduct(key);

    if (
      key !== 'techmate_token' &&
      key.length > 23 &&
      JSON.parse(sessionStorage.getItem(key)).pricePerMonth
    ) {
      sessionData.push({ key, value });
    }
  }
  return sessionData;
};

export default getDataFromServer;
