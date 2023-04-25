import { Router } from 'express';
import { orderModel } from '../db/models/order-model.js';

const orderRouter = Router();

//사용자 주문 추가(장바구니 상품 주문 진행)
orderRouter.post('/', async (req, res, next) => {
  try {
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
});

/*
// 이 부분부터 mypage로 넘어가야 하는게 아닌가 생각

//사용자 주문정보 리스트 조회(주문 내역 조회 - 내 페이지에서) 
orderRouter.get('/', async(req, res, next) => {
    try{
        const userOrderList = await orderModel.findAll(); // service로 넘어가야 함
        res.status(200).json(userOrderList);

    }catch(err){
        next(err);
    }
});


//사용자 특정 주문정보 조회/
orderRouter.get('/orders/:orderNumber', async (req, res, next) => {
    try{
        const orderNumber = req.params.orderNumber;
        const order = await Order.findById(orderNumber);

        if(!orderNumber){
            return res.status(404).json({message : '주문을 찾을 수 없습니다.'});
        }

        res.status(200).json(order);
    }catch(err){
        next(err);
    }
});

//사용자 주문 수정(주문 완료 후 배송이 시작되기 전까지 주문 정보를 수정할 수 있다. - 환불, 교환을 의미하는 듯?)
orderRouter.patch('/orders/:orderNumber', async(req, res, next) => {
    try{
        const orderNumber = req.params.orderNumber;

        // 주문 정보 수정이 사용자라면?
        const { userId, username, moblieNumber, address } = req.body;
        const order = await Order.findByIdAndUpdate(
            orderNumber,
            { userId, username, moblieNumber, address},
            {new : true}
        );

        // 주문 정보 수정이 상품 정보라면? -> 교환?
        //const rentalPeriod = req.body.rentalPeriod;
        //const quantity = req.body.quantity;
        res.json(order);       
    }catch(err){
        next(err);
    }
});

orderRouter.delete('/orders/:orderNumber', async(req, res, next) => {
    try{
        const orderNumber = req.params.orderNumber;
        const orderDelete = Order.findByIdAndDelete(orderNumber);

        res.status(200).json(orderDelete);
    }catch(err){
        next(err);
    }

})
*/

export { orderRouter };
