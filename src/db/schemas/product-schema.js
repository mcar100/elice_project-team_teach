import { Schema } from 'mongoose';

const ProductSchema = new Schema({
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category',
        required : true,
    },

    name : {
        type : String,
        required : true,
    },

    price : {
        type : Number,
        required : true,
    },

    discountRate : {
        type : Number,
    },

    images : {
        type : [ String ],
        required : true,
    },

    rentalPeriod : {
        type : Number,
        required : true,
    },

    color : {
        type : [String],
        required : true,
    },

    seller : {
        type : String,
        required : true,
    },

    quantity : {
        type : Number,
        required : true,
    },

    productDetailImages : {
        type : [String],
        required : true,
    },

    productSpecification : {
        model : {
            type : String,
        },
        
        brand : {
            type : String,
        },

        size : {
            type : String,
        },
        energyEfficiencyRating : {
            type : String,
        },
    },
}, {timestamps : true });

export default ProductSchema;
