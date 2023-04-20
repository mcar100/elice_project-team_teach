import { Schema } from "mongoose";

const CategorySchema = new Schema({
    category : {
        type : String,
        required : true,
    },

    subCategory : {
        type : String,
        required : true,
    },
    
}, {timestamps : true });

export default CategorySchema;
