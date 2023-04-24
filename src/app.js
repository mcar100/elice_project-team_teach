import cors from 'cors';
import express from 'express';
//import categoryRouter from './routers/category-router.js';
//import orderRouter from './routers/order-router.js';
//import productRouter from './routers/product-router.js';

import {
  viewsRouter,
  userRouter,
  categoryRouter,
  productRouter,
  orderRouter,
  orderItemRouter,
} from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//api 라우팅

app.get('/', (req, res) => {
  const data = {
    title: '예쁜 니트입니다.',
    description: '편하게 입을 수 있으며, 고급스러운 느낌을 줍니다.',
    price: '18,900원',
    image: 'clothes.jpg',
  };

  res.json(data);
});

//app.use 최상단
//app.use('/user', userRouter); /user
//app.use('/', indexRouter);
app.use('/categories', categoryRouter); // /api/catgories
//app.use('/product', productRouter);
//app.use('/order', orderRouter);
//app.use('/mypage, mypageRouter); 아직 구성 안함 필요 시 추가 근데 필요해보임/mypage
//app.use('/finshOrder, finshOrderRouter); 이름 새로 짓기

export default { app };
