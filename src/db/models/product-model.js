import { model } from 'mongoose';
import ProductSchema from '../schemas/product-schema.js';

const Product = model('Product', ProductSchema);

export class ProductModel {
  async findAll() {
    const products = await Product.find({});
    return products;
  }

  async findByProductId(productId) {
    const product = await Product.findOne({ _id: productId });
    return product;
  }

  async findByProductName(productName) {
    const product = await Product.findOne({ productName });
    return product;
  }

  async findProductByCategoryId(categoryId) {
    const products = await Product.find({ categoryId });
    return products;
  }

  async createProduct(productInfo) {
    const createdNewProduct = await Product.create(productInfo);
    return createdNewProduct;
  }

  async findOneByCategoryId(categoryId) {
    const product = await Product.findOne({ categoryId });
    return product;
  }

  async updateProductInfo(productId, update) {
    const updateProduct = await Product.findByIdAndUpdate(productId, update, {
      new: true,
    });

    return updateProduct;
  }

  async deleteProductInfo(productId) {
    const deleteProduct = await Product.deleteOne({ _id: productId });
    return deleteProduct;
  }
}

const productModel = new ProductModel();

export { productModel };
