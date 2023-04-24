import { Schema } from 'mongoose';

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    address: {
      type: new Schema(
        {
          postalCode: String,
          address1: String,
          address2: String,
          receiverName: String,
          receiverPhoneNumber: String,
        },
        {
          _id: false,
        }
      ),
      required: true,
    },

    productInfo: {
      type: new Schema(
        {
          rentalPeriod: String,
          quantity: Number,
          pricePerMonth: Number,
          color: String,
        },
        {
          _id: false,
        }
      ),
      required: true,
    },

    deliveryFee: {
      type: Number,
    },

    deliveryStatus: {
      type: String,
      enum: ['preparing', 'onTheWay', 'arrived'],
      required: true,
    },

    deliveryRequirements: {
      type: String,
    },

    paymentOption: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default OrderSchema;
