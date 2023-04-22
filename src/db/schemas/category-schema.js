import { Schema } from "mongoose";

const CategorySchema = new Schema({
    categoryName : {
        type : String,
        required : true,
    },

    categoryIcon : {
        type : String,
        required : true,
    }
    
}, {timestamps : true });

export default CategorySchema;
