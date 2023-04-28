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

//CORS 에러 방지
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//api 라우팅
app.use(viewRouter);
app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

export { app };
