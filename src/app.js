import cors from 'cors';
import express from 'express';
import {
  viewRouter,
  userRouter,
  categoryRouter,
  productRouter,
  orderRouter,
} from './routers/index.js';
import cookieParser from 'cookie-parser';

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

export { app };
