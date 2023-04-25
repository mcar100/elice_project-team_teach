import { userModel } from '../db/index.js';

export class userService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async updateUserByUserId(userId, updateData) {
    const updateUser = await userModel.updateUserInfo();
  }
}

const userService = new userService(userModel);
export { userService };
