import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import {
  viewRouter,
  userRouter,
  categoryRouter,
  productRouter,
  orderRouter,
} from './routers/index.js';

const app = express();

// 뷰 폴더 정적 추가

//CORS 에러 방지
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//api 라우팅

app.use(viewRouter);
app.use('/users', userRouter);
app.use('/categories', categoryRouter); // /api/catgories
app.use('/products', productRouter);
app.use('/orders', orderRouter);

//미들웨어 오류처리
//app.use(에러핸들링);
export { app };
