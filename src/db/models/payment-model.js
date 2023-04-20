import mongoose from 'mongoose';
import PaymentSchema from "../schemas/payment-schema";

export default mongoose.model("Payment", PaymentSchema);
