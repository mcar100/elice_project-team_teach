import { Router } from 'express';
import { adminOnly } from '../middlewares/admin-only.js';
import { signinRequired } from '../middlewares/signin-required.js';
import { orderService } from '../services/order-service.js';

const orderRouter = Router();

//사용자 주문 추가(장바구니 상품 주문 진행)
orderRouter.post('/', async (req, res, next) => {
  try {
    // if (is.emptyObject(req.body)) {
    //     throw new Error(
    //       'headers의 Content-Type을 application/json으로 설정해주세요'
    //     );
    //   }

    const {
      userId,
      productName,
      address,
      productInfo,
      deliveryFee,
      deliveryStatus,
      deliveryRequirements,
      paymentOption,
    } = req.body;
    // 필요 정보 있으면 이어서 작성 후, create 안에 넣기

    const order = await orderService.addOrder({
      userId,
      productName,
      address,
      productInfo,
      deliveryFee,
      deliveryStatus,
      deliveryRequirements,
      paymentOption,
    });

    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
});

// ========= 관리자 기능
// 사용자 전체 주문 목록 조회
orderRouter.get('/admins', adminOnly, async (req, res, next) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

//사용자의 배송 상태 수정
orderRouter.patch('/admins/:orderId', adminOnly, async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const { deliveryStatus } = req.body;

    console.log(deliveryStatus);

    const toUpdate = {
      ...(deliveryStatus && { deliveryStatus }),
    };

    const updateDeliveryStatus = await orderService.updateOrderByOrderId(
      orderId,
      toUpdate
    );

    res.status(200).json(updateDeliveryStatus);
  } catch (err) {
    next(err);
  }
});

// 사용자 주문 내역 삭제
orderRouter.delete('/admins/:orderId', adminOnly, async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const deleteOrder = await orderService.deleteOrderByOrderId(orderId);

    res.status(200).json(deleteOrder);
  } catch (err) {
    next(err);
  }
});

//특정 주문 정보 상세 조회
orderRouter.get('/:orderId', adminOnly, async (req, res, next) => {
  try {
    const orderId = req.params.orderId;

    const orderData = await orderService.getOrderDataByOrderId(orderId);

    res.status(200).json(orderData);
  } catch (err) {
    next(err);
  }
});

//======= 사용자 기능
//사용자의 전체 주문정보 리스트 조회(주문 내역 조회 - 내 페이지에서)
//사용자가 구매한 상품 전체 조회
orderRouter.get('/users/:userId', signinRequired, async (req, res, next) => {
  try {
    //미들웨어 처리에 따라 userId가 삭제될 수도 있을 듯
    const userId = req.params.userId;

    const userOrders = await orderService.getOrdersByUserId(userId); // service로 넘어가야 함
    res.status(200).json(userOrders);
  } catch (err) {
    next(err);
  }
});

//사용자 특정 주문 수정(주문 완료 후 배송이 시작되기 전까지 주문 정보를 수정할 수 있다. - 환불, 교환을 의미하는 듯?)
orderRouter.patch('/users/:orderId', signinRequired, async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const { address, deliveryStatus, deliveryRequirements } = req.body;

    const toUpdate = {
      ...(address && { address }),
      ...(deliveryStatus && { deliveryStatus }),
      ...(deliveryRequirements && { deliveryRequirements }),
    };

    const updateOrder = await orderService.updateOrderByOrderId(
      orderId,
      toUpdate
    );

    res.status(200).json(updateOrder);
  } catch (err) {
    next(err);
  }
});

//사용자의 특정 주문 내역 취소
orderRouter.delete(
  '/users/:orderId',
  signinRequired,
  async (req, res, next) => {
    try {
      const orderId = req.params.orderId;
      const deleteOrder = await orderService.deleteOrderByOrderId(orderId);

      res.status(200).json(deleteOrder);
    } catch (err) {
      next(err);
    }
  }
);

export { orderRouter };
