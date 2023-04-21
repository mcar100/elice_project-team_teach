import {model} from 'mongoose';
import OrderSchema from "../schemas/order-schema.js";

const Order = model('Category', CategorySchema);

export class OrderModel{
    async findAll() {
        const categorys = await Order.find({});
        return categorys;
    }

    async findById(categoryId) {
        const category = await Order.findOne({ _id: categoryId });
        return category;
    }

    async create(categoryInfo) {
        const createdNewCategory = await Order.create(categoryInfo);
        return createdNewCategory;
    }
    
}

const orderModel = new OrderModel();

export { orderModel };
