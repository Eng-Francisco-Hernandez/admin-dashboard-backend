import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
export default User;
