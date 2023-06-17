import * as mongoose from "mongoose";
import { Role } from "../data/enums";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
      maxLength: [200, "Max length is 200 chars"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password is required"],
      maxLength: [200, "Max length is 200 chars"],
    },
    role: {
      type: String,
      enum: Role,
      required: [true, "Role is required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
export default User;
