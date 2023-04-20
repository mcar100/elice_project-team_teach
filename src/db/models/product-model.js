import mongoose from 'mongoose';
import ProductSchema from '../schemas/product-schema';

export default mongoose.model('Product', ProductSchema);