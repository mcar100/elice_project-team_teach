const { Schema } = require('mongoose');

const categorySchema = new Schema({
    category : {
        type : String,
        required : true,
    },

    subCategory : {
        type : String,
        required : true,
    },
    
}, {timestamps : true });

export default categorySchema;
