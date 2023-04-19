const mongoose = require("mongoose");
import OrderSchema from "../schemas/order";

export default mongoose.model("Order", OrderSchema);
