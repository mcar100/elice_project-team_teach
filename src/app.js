import cors from 'cors';
import express from 'express';
import { categoryRouter, productRouter, orderRouter } from './routers/index.js';

const app = express();

//CORS 에러 방지
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//api 라우팅

//app.use('/', viewRouter);
//app.use('/users, mypageRouter); 아직 구성 안함 필요 시 추가 근데 필요해보임/mypage
app.use('/categories', categoryRouter); // /api/catgories
app.use('/products', productRouter);
app.use('/orders', orderRouter);
//app.use('/finshOrder, finshOrderRouter); 이름 새로 짓기

export { app };
