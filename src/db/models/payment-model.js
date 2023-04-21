import mongoose from 'mongoose';
import PaymentSchema from "../schemas/payment-schema.js";

export default mongoose.model("Payment", PaymentSchema);
