import { Schema } from "mongoose";

const OrderSchema = new Schema({
  orderNumber: {
    type: Number,
    requried: true,
  },
  username: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  rentalPeriod: {
    type: Number,
    required: true,
  },
  deliveryFee: {
    type: Number,
    required: true,
  },
}, {timestamps: true} );


export default OrderSchema;
