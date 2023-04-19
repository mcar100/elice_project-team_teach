const mongoose = require("mongoose");
import PaymentSchema from "../schemas/order";

export default mongoose.model("Payment", PaymentSchema);
