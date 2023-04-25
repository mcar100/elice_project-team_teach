// 이런식으로 api.js에 모듈을 만들자
// async function post(host, path, body, headers = {}) {
//   const url = `https://${host}/${path}`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       ...headers,
//     },
//     body: JSON.stringify(body),
//   };
//   const res = await fetch(url, options);
//   const data = await res.json();
//   if (!res.ok) {
//     throw Error(data);
//   } else {
//     return data;
//   }
// }

// post('jsonplaceholder.typicode.com', 'posts', {
//   title: 'Test',
//   body: 'I am testing!',
//   userId: 1,
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// /products/{product-id} - 사용자 정보 조회 API

// 아하 localStorage가 사이트마다 있구나!
// 장바구니에서 나올때마다 localStorage를 지워야하나?
import * as local from '../../webStorage/js/localStorage.js';

const productId = local.getProductId('productId');
// const requestPoductInfo = productId;
fetch(`https://localhost/products/${productId}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
