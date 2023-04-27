const getUserId = async (token) => {
  const response = await fetch('http://localhost:3000/users/token-decode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      token: token,
    }),
  });
  const data = await response.json();
  return data;
};

const getUserInfo = async (userId, token) => {
  const response = await fetch(`http://localhost:3000/users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export { getUserId, getUserInfo };
