import {model} from 'mongoose';
import MypageSchema from '../schemas/mypage-schema';

const Mypage = model('Mypage', MypageSchema);

export class MypageModel{
    async findAll(userId) {
        const mypages = await Mypage.find({userId});
        return mypages;
    }

    async findById(mypageId) {
        const mypage = await Mypage.findOne({ _id: mypageId });
        return mypage;
    }

    async create(mypageInfo) {
        const createdNewMypage = await Mypage.create(mypageInfo);
        return createdNewMypage;
    }
    
    async findOrderListAll(userId){
        const orderLists = await Mypage.find({ userId : userId });
        return orderLists;
    }

    async deleteById(orderItemId) {
        const result = await Mypage.deleteOne({ orderNumber: orderItemId });
        return result;
    }
    
}

const mypageModel = new MypageModel();

export { mypageModel };
