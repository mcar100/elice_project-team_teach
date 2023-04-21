import mongoose from 'mongoose';
import CartSchema from '../schemas/cart-schema.js';

export default mongoose.model('Cart', CartSchema);