import cors from 'cors';
import express from 'express';
import {
  viewRouter,
  categoryRouter,
  productRouter,
  orderRouter,
} from './routers/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// 뷰 폴더 정적 추가

//CORS 에러 방지
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// console.log(app.use(express.static('views')));

// app.get('/', (req, res) => {
//   res.sendFile('../views/mainPage/html/mainPage.html');
// });
//api 라우팅

app.use(viewRouter);
//app.use('/users, mypageRouter); 아직 구성 안함 필요 시 추가 근데 필요해보임/mypage
app.use('/categories', categoryRouter); // /api/catgories
app.use('/products', productRouter);
app.use('/orders', orderRouter);

/*
function serveStatic(resource) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const resourcePath = path.join(__dirname, `../views/${resource}`);
  const option = { index: `${resource}.html` };

  console.log('__dirname', __dirname);
  console.log('resourcePath', resourcePath);
  console.log('option', option);

  console.log(express.static(resourcePath, option));

  return express.static(resourcePath, option);
}
*/

export { app };
