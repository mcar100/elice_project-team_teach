// async function getMyData(userId) {
//   const res = await fetch(`http://localhost:3000/users/${userId}`, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = res.json();
//   console.log(data);
//   return data;
// }

const getUserId = async () => {
  const token = sessionStorage.getItem('token');
  const res = await fetch(`http://localhost:3000/users/token-decode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: {
      token: token,
    },
    credentials: 'include',
  });
  const data = res.json();
  console.log(data);
  return data;
};

// export { getMyData };
export { getUserId };
