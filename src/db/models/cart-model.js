import mongoose from 'mongoose';
import CartSchema from '../schemas/cart-schema';

export default mongoose.model('Cart', CartSchema);