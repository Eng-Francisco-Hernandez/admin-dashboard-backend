import { GraphQLList } from "graphql";
import { GraphType } from "./types";
import { Graph } from "../../../models";

export const GraphQuery = {
  getGraphs: {
    type: new GraphQLList(GraphType),
    description: "Returns data set",
    async resolve(parent: any, args: any) {
      const graphs = await Graph.find();
      return graphs;
    },
  },
};
