import { userModel } from '../db/index.js';

export class userService {
  constructor(userModel) {
    this.userModel = userModel;
  }
}

const userService = new userService(userModel);
export { userService };
