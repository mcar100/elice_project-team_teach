const { Schema } = require('mongoose'); 

const userSchema = new Schema({
    username : {
        type : String,
        required: true,
    },

    email : {
        type : String,
        required : true,
    },

    password : {
        type : String,
        required : true,
    },

    moblieNumber : {
        type : String,
        required : true,
    },

    address : {
        type : String,
        required : true,
    },

    
}, {timestamps : true});

export default userSchema;