const getUserData = async () => {
  const response = await fetch(`http://localhost:3000/products/user/128789471`);
  const data = await response.json();
  return data;
};

const getUserDataFromServer = async () => {
  const data = [];
  const userData = await getUserData();
  data.push(userData);
  const userInfo = await Promise.all(data);

  return userInfo;
};

getUserDataFromServer();

export default getUserDataFromServer;
