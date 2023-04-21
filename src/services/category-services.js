import { categoryModel } from '../db/models/category-model.js';
import { productModel } from '../db/models/product-model.js';

class CategoryService {
  constructor(categoryModel, productModel) {
    this.categoryModel = categoryModel;
    this.productModel = productModel;
  }

  // 사용자 기능
  // 전체 카테고리 가져오기
  async getAllCategoryName() {
    const categories = await this.categoryModel.findAll();
    return categories;
  }

  //특정 카테고리 가져오기
  async getProductListByCategoryId(categoryId) {
    const productListByCategory = await this.categoryModel.findById(categoryId);

    if (!productListByCategory) {
      throw new Error(
        '해당 id의 카테고리는 없습니다. 다시 한 번 확인해 주세요.'
      );
    }

    return productListByCategory;
  }

  // 관리자 기능
  async addCategory(categoryData) {
    const { categoryName } = categoryData;

    const category = await this.categoryModel.findByName(categoryName);

    if (category) {
      throw new Error(
        '현재 사용중인 카테고리입니다.. 다른 이름을 입력해 주세요.'
      );
    }

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
