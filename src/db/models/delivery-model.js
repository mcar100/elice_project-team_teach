import mongoose from 'mongoose';
import DeliverySchema from "../schemas/delivery-schema.js";

export default mongoose.model("Delivery", DeliverySchema);
