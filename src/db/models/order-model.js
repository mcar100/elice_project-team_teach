import mongoose from 'mongoose';
import OrderSchema from "../schemas/order-schema";

export default mongoose.model("Order", OrderSchema);
