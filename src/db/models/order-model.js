import { model } from 'mongoose';
import OrderSchema from '../schemas/order-schema.js';

const Order = model('orders', OrderSchema);

export class OrderModel {
  async findAll() {
    const orders = await Order.find({});
    return orders;
  }

  async createOrder(orderInfo) {
    const createdNewOrder = await Order.create(orderInfo);
    return createdNewOrder;
  }

  async findOrdersByUserId(userId) {
    const orders = await Order.find({ userId });
    return orders;
  }

  async findOrderDataByOrderId(orderId) {
    const order = await Order.findOne({ _id: orderId });
    return order;
  }

  async updateOrderInfo(orderId, updateData) {
    const updateOrder = await Order.findByIdAndUpdate(orderId, updateData, {
      new: true,
    });

    return updateOrder;
  }

  async deleteOrderInfo(orderId) {
    const deleteOrder = await Order.deleteOne({ _id: orderId });

    console.log('Model delete Order', deleteOrder);

    return deleteOrder;
  }

  async updateDeliveryStatusInfo(orderId, updateDate) {
    const updateDeliveryStatus = await Order.findByIdAndUpdate(
      orderId,
      updateDate,
      { new: true }
    );

    return updateDeliveryStatus;
  }
}

const orderModel = new OrderModel();

export { orderModel };
