import { categoryModel } from '../db/models/category-model.js';
import { productModel } from '../db/models/product-model.js';

class CategoryService {
  constructor(categoryModel, productModel) {
    this.categoryModel = categoryModel;
    this.productModel = productModel;
  }

  // 사용자 기능
  async getAllCategoryName() {
    const categories = await this.categoryModel.findAll();
    return categories;
  }

  async getProductListByCategoryId(categoryId) {
    const productListByCategory = await this.categoryModel.findById(categoryId);
    return productListByCategory;
  }

  // 관리자 기능
  async addCategory(categoryData) {
    const newCategory = await this.categoryModel.createByInfo(categoryData);
    return newCategory;
  }

  async deleteCategoryByCategoryId(categoryId) {
    const deleteCategory = await this.categoryModel.deleteById(categoryId);
    return deleteCategory;
  }

  async updateCategoryByCategoryId(categoryId, updateData) {
    const updateCategory = await this.categoryModel.updateById(
      categoryId,
      updateData
    );

    return updateCategory;
  }
}

const categoryService = new CategoryService(categoryModel, productModel);
export { categoryService };
