import { Schema } from "mongoose";

const OrderSchema = new Schema({
  orderNumber: {
    type: Number,
    requried: true,
  },
  
  username: [
    {
      type: Schema.Types.ObejctId,
      ref : ['Nonuser','User'],
      required: true,
    }
  ],

  mobileNumber: {
      type: Schema.Types.ObejctId,
      ref : ['Nonuser','User'],
      required: true, 
  },

  rentalPeriod: {
    type: Schema.Types.ObjectId,
    ref : 'Product',
    required: true,
  },

  deliveryFee: {
    type: Number,
    required: true,
  },

}, {timestamps: true} );


export default OrderSchema;
