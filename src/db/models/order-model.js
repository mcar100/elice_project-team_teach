import {model} from 'mongoose';
import OrderSchema from "../schemas/order-schema.js";

const Order = model('Order', OrderSchema);

export class OrderModel{
    async findAll() {
        const orders = await Order.find({});
        return orders;
    }

    async findById(orderId) {
        const order = await Order.findOne({ _id: orderId });
        return order;
    }

    async create(orderInfo) {
        const createdNewOrder = await Order.create(orderInfo);
        return createdNewOrder;
    }
    
}

const orderModel = new OrderModel();

export { orderModel };
