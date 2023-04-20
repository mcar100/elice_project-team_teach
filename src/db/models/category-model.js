import mongoose from 'mongoose';
import CategorySchema from '../schemas/category-schema';

export default mongoose.model('Category', CategorySchema);