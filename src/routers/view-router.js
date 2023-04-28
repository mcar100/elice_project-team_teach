import express from 'express';
import path from 'path';

const viewRouter = express.Router();

const __dirname = path.resolve();
const resourcePath = path.join(__dirname, '/src/views');

viewRouter.use(express.static(path.join(__dirname, '/src/views')));
viewRouter.get('/', async (req, res) => {
  res.sendFile(path.join(resourcePath, '/mainPage/html/mainPage.html'));
});

viewRouter.get('/signup', async (req, res) => {
  res.sendFile(path.join(resourcePath, '/registerPage/html/registerPage.html'));
});

viewRouter.get('/signin', async (req, res) => {
  res.sendFile(path.join(resourcePath, '/loginPage/html/loginPage.html'));
});

viewRouter.get('/mypage', async (req, res) => {
  res.sendFile(path.join(resourcePath, '/myPage/html/mypage.html'));
});

viewRouter.get('/mypage/orders', async (req, res) => {
  res.sendFile(
    path.join(resourcePath, '/orderCheckPage/html/orderCheckPage.html')
  );
});

viewRouter.get('/category', async (req, res) => {
  res.sendFile(path.join(resourcePath, '/categoryPage/html/categoryPage.html'));
});

viewRouter.get('/product/detail', async (req, res) => {
  res.sendFile(path.join(resourcePath, '/itemDetail/html/itemDetail.html'));
});

viewRouter.get('/cart', async (req, res) => {
  res.sendFile(path.join(resourcePath, '/cartPage/html/cartPage.html'));
});

viewRouter.get('/order', async (req, res) => {
  res.sendFile(path.join(resourcePath, '/orderPage/html/orderPage.html'));
});

viewRouter.get('/order/complete', async (req, res) => {
  res.sendFile(
    path.join(resourcePath, '/orderCompletedPage/html/orderCompletedPage.html')
  );
});

export { viewRouter };
