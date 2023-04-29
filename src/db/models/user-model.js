import { model } from 'mongoose';
import UserSchema from '../schemas/user-schema.js';

const User = model('User', UserSchema);

export class UserModel {
  // CRUD 순서

  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);
    return createdNewUser;
  }

  async findAll() {
    // 관리자 기능, 유저 조회
    const users = await User.find({});
    return users;
  }

  async findById(userId) {
    const user = await User.findOne({ _id: userId });
    return user;
  }

  async findOneByEmail(userEmail) {
    const user = await User.findOne({ email: userEmail });
    return user;
  }

  async update({ userId, update }) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }

  async deleteById(userId) {
    const deleteUser = await User.deleteOne({ _id: userId });
    return deleteUser;
  }
}

const userModel = new UserModel();

export { userModel };
