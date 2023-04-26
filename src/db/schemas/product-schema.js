import { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
    },

    pricePerMonth: {
      type: [Number],
      required: true,
    },

    discountRate: {
      type: Number,
    },

    images: {
      type: [String],
      required: true,
    },

    rentalPeriod: {
      type: [Number],
      required: true,
    },

    color: {
      type: [String],
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    deliveryFee: {
      type: Number,
    },

    productDetailImages: {
      type: [String],
      required: true,
    },

    productSpecification: {
      model: {
        type: String,
      },

      brand: {
        type: String,
      },

      size: {
        type: String,
      },
      energyEfficiencyRating: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export default ProductSchema;
