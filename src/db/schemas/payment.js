import { Schema } from "mongoose";

const PaymentSchema = new Schema({
    priceMonth: {
    type: Number,
    requried: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  paymentOption: {
    type: String,
    enum: ['preparing', 'onTheWay', 'arrived'],
    required: true,
  },
  createdAt: new Date.now()
}, {timestamps: true} );


export default PaymentSchema;
