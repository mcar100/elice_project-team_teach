import { Schema } from 'mongoose';

const OrderSchema = new Schema(
  {
    orderNumber: {
      type: Number,
      requried: true,
    },

    username: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],

    mobileNumber: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    rentalPeriod: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },

    deliveryFee: {
      /*
    type : Schema.Types.ObjectId,
    ref : 'Cart',
    */
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default OrderSchema;
