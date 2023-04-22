import { model } from 'mongoose';
import ProductSchema from '../schemas/product-schema.js';

const Product = model('Product', ProductSchema);

export class ProductModel {
  async findAll() {
    const products = await Product.find({});
    return products;
  }

  async findById(productId) {
    const product = await Product.findOne({ _id: productId });
    return product;
  }

  async create(productInfo) {
    const createdNewProduct = await Product.create(productInfo);
    return createdNewProduct;
  }

  async findOneByCategoryId(categoryId) {
    const product = await Product.findOne({ categoryId });
    return product;
  }
}

const productModel = new ProductModel();

export { productModel };
