import { Router } from 'express';

const mypageRouter = Router();
/*
import { productModel } from '../db/models/product-model';



// 사용자 정보 조회s
mypageRouter.get('/', async (req, res, next) => {
  try {
    const userId = req.query.userId;
    const mypageInfo = await Mypage.find(userId);

    res.status(200).json(mypageInfo);
  } catch (err) {
    next(err);
  }
});

//사용자 정보 수정
mypageRouter.patch('/', async (req, res, next) => {
  try {
    // /:userId라면 req.params.userId
    const userId = req.query.userId;

    const user = await Mypage.findById(userId);

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const moblieNumber = req.body.moblieNumber;
    const address = req.body.address;

    console.log(user);

    // 수정코드 이어서
  } catch (err) {
    next(err);
  }
});

//사용자 회원 탈퇴

//사용자 모든 주문 정보 조회
mypageRouter.get('/orderList', async (req, res, next) => {
  try {
    const userId = req.query.userId;
    const orderLists = await Mypage.findOrderListAll(userId);

    res.status(200).json(orderLists);
  } catch (err) {
    next(err);
  }
});

//사용자 주문 취소
mypageRouter.delete('/orderList/:orderNumber', async (req, res, next) => {
  try {
    const orderNumber = req.params.orderNumber;
    const userDeleteOrder = await Mypage.deleteById(orderNumber);

    res.status(200).json(userDeleteOrder);
  } catch (err) {
    next(err);
  }
});

// 관리자 기능 ========
*/
export { mypageRouter };
