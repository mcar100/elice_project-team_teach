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
  }

  async deleteOrderByOrderId(orderId) {
    const { deleteOrder } = await this.orderModel.deleteOrderInfo(orderId);

    if (deleteOrder === 0) {
      throw new Error(`${orderId} 주문의 삭제에 실패하였습니다`);
    }

    return { result: 'success' };
  }
}

const orderService = new OrderService(orderModel);
export { orderService };
