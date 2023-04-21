import mongoose from 'mongoose';
import ProductSchema from '../schemas/product-schema.js';

export default mongoose.model('Product', ProductSchema);