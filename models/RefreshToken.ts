import * as mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
      unique: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);
export default RefreshToken;
