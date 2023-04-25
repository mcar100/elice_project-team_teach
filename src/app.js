import cors from 'cors';
import express from 'express';
import path from 'path';
import {
  categoryRouter,
  productRouter,
  orderRouter,
  viewsRouter,
} from './routers/index.js';

const app = express();
const __dirname = path.resolve();

//CORS 에러 방지
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 최초 페이지 라우팅
app.use(express.static(path.join(__dirname, '/src/views')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/views/mainPage/html/index.html'));
});

//api 라우팅
app.use('/', viewsRouter);
//app.use('/users, mypageRouter); 아직 구성 안함 필요 시 추가 근데 필요해보임/mypage
app.use('/categories', categoryRouter); // /api/catgories
app.use('/products', productRouter);
// app.use('/orders', orderRouter);
//app.use('/finshOrder, finshOrderRouter); 이름 새로 짓기

export { app };
