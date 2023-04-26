import { productModel, categoryModel } from '../db/index.js';

class ProductService {
  constructor(productModel, categoryModel) {
    this.productModel = productModel;
    this.categoryModel = categoryModel;
  }

  async getAllProductName() {
    const product = await this.productModel.findAll();
    return product;
  }

  async getProductDetailData(productId) {
    const product = await this.productModel.findByProductId(productId);

    if (!product) {
      throw new Error('해당 상품이 없습니다. 다시 확인해주세요.');
    }

    return product;
  }

  async addProduct(productInfo) {
    const { productName } = productInfo;

    //상품 이름 중복 확인
    const product = await this.productModel.findByProductName(productName);

    if (product) {
      throw new Error(
        '이미 사용 중인 상품의 이름입니다. 다른 이름을 입력해 주세요.'
      );
    }

    const createNewProduct = await this.productModel.createProduct(productInfo);

    return createNewProduct;
  }

  async updateProductByProductId(productId, toUpdate) {
    const updateProduct = await this.productModel.updateProductInfo(
      productId,
      toUpdate
    );
    return updateProduct;
  }

  async deleteProductData(productId) {
    const { deleteProduct } = await this.productModel.deleteProductInfo(
      productId
    );

    if (deleteProduct === 0) {
      throw new Error(`${productId} 제품의 삭제에 실패하였습니다.`);
    }

    return { result: 'success' };
  }
}

const productService = new ProductService(productModel, categoryModel);

export { productService };
