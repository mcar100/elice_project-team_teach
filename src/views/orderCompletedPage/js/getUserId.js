const getUserId = async (token) => {
  if (!token) return -1;
  const response = await fetch(`http://34.22.85.74/users/token-decode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

const getUserInfo = async (userId, token) => {
  if (!userId || !token) return -1;
  const response = await fetch(`http://34.22.85.74/users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export { getUserId, getUserInfo };
