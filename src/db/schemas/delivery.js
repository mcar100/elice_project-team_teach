import { Schema } from "mongoose";

const DeliverySchema = new Schema({
  invoiceNumber: {
    type: Number,
    requried: true,
  },
  address: {
    type: String,
    required: true,
  },
  deliveryStatus: {
    type: String,
    enum: ['preparing', 'onTheWay', 'arrived'],
    required: true,
  },
  deliveryRequirements: {
    type: Number,
    required: true,
  },
}, {timestamps: true} );


export default DeliverySchema;
