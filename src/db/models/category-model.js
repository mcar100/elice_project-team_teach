import { model } from 'mongoose';
import { CategorySchema } from '../schemas/category-schema.js';

const Category = model('Category', CategorySchema);

export class CategoryModel {
  async findAll() {
    const categorys = await Category.find({});
    return categorys;
  }

  async findByCategoryName(categoryName) {
    const category = await Category.findOne({ categoryName });
    return category;
  }

  async findById(categoryId) {
    const category = await Category.findOne({ _id: categoryId });
    return category;
  }

  async createByInfo(categoryInfo) {
    const createdNewCategory = await Category.create(categoryInfo);
    return createdNewCategory;
  }

  async deleteById(categoryId) {
    const deleteCategory = await Category.deleteOne({ _id: categoryId });
    return deleteCategory;
  }

  async updateById(categoryId, updateData) {
    const updateCategory = await Category.findByIdAndUpdate(
      categoryId,
      updateData,
      { new: true }
    );

    return updateCategory;
  }
}

const categoryModel = new CategoryModel();

export { categoryModel };
