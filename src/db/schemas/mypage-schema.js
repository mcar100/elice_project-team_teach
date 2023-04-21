import { Schema } from "mongoose";

const MypageSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    orderId : {
        type : Schema.Types.ObjectId,
        ref : 'Order',
    },
    
}, {timestamps : true });

export default MypageSchema;
