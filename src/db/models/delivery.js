const mongoose = require("mongoose");
import DeliverySchema from "../schemas/order";

export default mongoose.model("Delivery", DeliverySchema);
