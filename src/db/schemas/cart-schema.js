import { Schema } from 'mongoose';

const CartSchema = new Schema({
    name : {
        type: Schema.Types.ObejctId,
        ref : 'Product',
        required: true,
    },

    price : {
        type: Schema.Types.ObejctId,
        ref : 'Product',
        required : true,
    },

    discountRate :{
        type: Schema.Types.ObejctId,
        ref : 'Product',
        required : true,
    },

    images : [{
        type: Schema.Types.ObejctId,
        ref : 'Product',
        required : true,
    }],

    color : [{
        type: Schema.Types.ObejctId,
        ref : 'Product',
        required : true,
    }],

    quantity : {
        type : Schema.Types.ObjectId,
        ref : 'Product',
        required : true,
    },

    rentalPeriod : {
        type : Schema.Types.ObjectId,
        ref : 'Product',
        required : true,
    },

    deliveryFee : {
        type : Number,
        required : true,
    },
    
}, {timestamps : true}); 

export default CartSchema;