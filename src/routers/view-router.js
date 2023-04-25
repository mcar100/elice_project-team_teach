import express from 'express';
import path from 'path';

const viewRouter = express.Router();

//app.use('요청 경로', express.static('실제 경로'))

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

// css 조정 필요 및 상품 이미지 적용x
viewRouter.get('/product/detail', async (req, res) => {
  res.sendFile(path.join(resourcePath, '/itemDetail/html/itemDetail.html'));
});

// 랜더링 확인 필요?
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

//viewRouter.get('');

// viewRouter.get('/', (req, res) => {
//   const __dirname = path.dirname(fileURLToPath(import.meta.url));
//   const resourcePath = path.join(
//     __dirname,
//     `../views/mainPage/html/mainPage.html`
//   );
// })
//viewRouter.use('/', serveStatic('mainPage', '/'));
// viewRouter.use('/signup', serveStatic('registerPage'));
// viewRouter.use('/signin', serveStatic('loginPage'));
// viewRouter.use('/mypage', serveStatic('myPage'));
// viewRouter.use('/mypage/orders', serveStatic('orderCheckPage'));
// viewRouter.use('/category', serveStatic('categoryPage'));
// viewRouter.use('/product/detali', serveStatic('itemDetail'));
// viewRouter.use('/cart', serveStatic('cartPage'));
// viewRouter.use('/order', serveStatic('orderPage'));
// viewRouter.use('/order/complete', serveStatic('orderCompletedPage'));

// views 폴더의 최상단 파일 (사진, favicon 등) 라우팅
//viewRouter.use('/', serveStatic(''));

// views폴더 내의 ${resource} 폴더 내의 모든 파일을 웹에 띄우며,
// 이 때 ${resource}.html 을 기본 파일로 설정함.

export { viewRouter };
