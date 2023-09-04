import * as mongoose from "mongoose";

const graphSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    points: [
      {
        data: Number,
      },
    ],
  },
  { timestamps: true }
);

export const Graph = mongoose.model("Graph", graphSchema);
export default Graph;
