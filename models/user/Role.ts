import * as mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      unique: true,
    },
    roleDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Role = mongoose.model("Role", roleSchema);
export default Role;
