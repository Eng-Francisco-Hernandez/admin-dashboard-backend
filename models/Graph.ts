import * as mongoose from "mongoose";

const graphSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    points: {
      type: [Number],
    },
  },
  { timestamps: true }
);

export const Graph = mongoose.model("Graph", graphSchema);
export default Graph;
