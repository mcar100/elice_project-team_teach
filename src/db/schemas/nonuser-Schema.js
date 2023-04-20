import { Schema } from 'mongoose';

const NonuserSchema = new Schema({
    username : {
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
    
    orderNumber : {
        type : Schema.Types.ObjectId,
        ref : 'Order',
    }
}, {timestamps : true });

export default NonuserSchema;