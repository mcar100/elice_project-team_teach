import express from 'express';
import path from 'path';
const viewsRouter = express.Router();

// views폴더 내의 ${resource} 폴더 내의 모든 파일을 웹에 띄우며,
// 이 때 ${resource}.html 을 기본 파일로 설정함.
function serveStatic(resource) {
  const __dirname = path.resolve();
  const resourcePath = path.join(__dirname, `../views/${resource}`);
  const option = { index: `${resource}.html` };

  return express.static(resourcePath, option);
}

//app.use('요청 경로', express.static('실제 경로'))
viewsRouter.use('/', serveStatic('mainPage'));
viewsRouter.use('/signup', serveStatic('registerPage'));
viewsRouter.use('/signin', serveStatic('loginPage'));
viewsRouter.use('/mypage', serveStatic('myPage'));
viewsRouter.use('/mypage/orders', serveStatic('orderCheckPage'));
viewsRouter.use('/category', serveStatic('categoryPage'));
viewsRouter.use('/product/detali', serveStatic('itemDetail'));
viewsRouter.use('/cart', serveStatic('cartPage'));
viewsRouter.use('/order', serveStatic('orderPage'));
viewsRouter.use('/order/complete', serveStatic('orderCompletedPage'));

// views 폴더의 최상단 파일 (사진, favicon 등) 라우팅
viewsRouter.use('/', serveStatic(''));

export { viewsRouter };
