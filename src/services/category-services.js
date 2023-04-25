import { categoryModel, productModel } from '../db/index.js';

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

  //선택한 카테고리의 정보 가져오기
  async getProductListByCategoryId(categoryId) {
    //const productListByCategory = await this.categoryModel.findById(categoryId);
    const productListByCategory =
      await this.productModel.findProductByCategoryId(categoryId);
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

    const category = await this.categoryModel.findByCategoryName(categoryName);

    if (category) {
      throw new Error(
        '현재 사용중인 카테고리입니다.. 다른 이름을 입력해 주세요.'
      );
    }

    const newCategory = await this.categoryModel.createByInfo(categoryData);

    return newCategory;
  }

  async deleteCategoryByCategoryId(categoryId) {
    const product = await this.productModel.findOneByCategoryId(categoryId);

    if (product) {
      throw new Error(
        `${categoryId} 카테고리에 등록된 제품이 있습니다. 등록된 제품이 없을 경우에만 카테고리 삭제가 가능합니다. `
      );
    }

    const { deleteCategory } = await this.categoryModel.deleteById(categoryId);

    if (deleteCategory === 0) {
      throw new Error(`${categoryId} 카테고리의 삭제에 실패하였습니다`);
    }

    return { return: 'success' };
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
