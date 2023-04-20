import { Schema } from "mongoose";

const PaymentSchema = new Schema({
  priceMonth: {
    type: Number,
    requried: true,
  },
  totalPrice: {
    /*
    type : Schemas.Types.ObjectId,
    ref : 'Cart',
    */
    type: String,
    required: true,
  },
  paymentOption: {
    type: String,
    enum: ['creditCard', 'naverPay', 'kakaoPay'],
    required: true,
  },
  createdAt: new Date.now()
}, {timestamps: true} );


export default PaymentSchema;
