import {model} from 'mongoose';
import CategorySchema from '../schemas/category-schema.js';

const Category = model('Category', CategorySchema);

export class CategoryModel{
    async findAll() {
        const categorys = await Category.find({});
        return categorys;
    }

    async findById(categoryId) {
        const category = await Category.findOne({ _id: categoryId });
        return category;
    }

    async create(categoryInfo) {
        const createdNewCategory = await Category.create(categoryInfo);
        return createdNewCategory;
    }
    
}

const categoryModel = new CategoryModel();

export { categoryModel };