import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    moblieNumber: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    identity: {
      type: String,
      enum: ['user', 'admin'],
      required: true,
      default: 'user',
    },
  },
  { timestamps: true }
);

export default UserSchema;
