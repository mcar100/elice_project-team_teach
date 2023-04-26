import { orderModel } from '../db/index.js';

class OrderService {
  constructor(orderModel) {
    this.orderModel = orderModel;
  }

  async getAllOrders() {
    const orders = await this.orderModel.findAll();
    return orders;
  }

  async addOrder(orderInfo) {
    let { orderNumber } = orderInfo;

    if (!orderNumber) {
      const timestamp = Date.now().toString();
      const randomNumber = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0');

      orderNumber = `${timestamp}${randomNumber}`;
    }

    orderInfo.orderNumber = orderNumber;

    const createNewOrder = await this.orderModel.createOrder(orderInfo);
    return createNewOrder;
  }

  async getOrdersByUserId(userId) {
    const userOrders = await this.orderModel.findOrdersByUserId(userId);
    return userOrders;
  }

  async getOrderDataByOrderId(orderId) {
    const order = await this.orderModel.findOrderDataByOrderId(orderId);

    if (!order) {
      throw new Error('해당 id의 주문은 없습니다. 다시 한 번 확인해 주세요.');
    }
    return order;
  }

  async updateOrderByOrderId(orderId, toUpdate) {
    const updateOrder = await this.orderModel.updateOrderInfo(
      orderId,
      toUpdate
    );

    return updateOrder;
  }

  async deleteOrderByOrderId(orderId) {
    const order = await this.orderModel.findOrderDataByOrderId(orderId);

    if (order.deliveryStatus !== 'preparing') {
      throw new Error(
        '해당 주문은 이미 배송이 시작되었거나 도착이 완료된 상품입니다. 주문 취소가 불가능합니다.'
      );
    }
    const deleteOrder = await this.orderModel.deleteOrderInfo(orderId);

    console.log('deleteOrder', deleteOrder);

    if (deleteOrder.deletedCount === 0) {
      throw new Error(`${orderId} 주문의 삭제에 실패하였습니다`);
    }

    return { result: 'success' };
  }

  async updateDeliveryStatusByOrderId(orderId, toUpdate) {
    const updateDeliveryStatus = await this.orderModel.updateDeliveryStatusInfo(
      orderId,
      toUpdate
    );

    return updateDeliveryStatus;
  }
}

const orderService = new OrderService(orderModel);
export { orderService };
