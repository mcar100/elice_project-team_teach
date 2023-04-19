const { Schema } = require('mongoose');

const productSchema = new Schema({
    _id : {
        type : Object.Types.Schema,
        //ref : 'Category'
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

export default productSchema;
