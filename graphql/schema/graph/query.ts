import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { GraphType } from "./types";
import { Graph } from "../../../models";

export const GraphQuery = {
  getGraphs: {
    type: new GraphQLList(GraphType),
    description: "Returns all existing graphs",
    async resolve(parent: any, args: any) {
      const graphs = await Graph.find().sort({ createdAt: -1 });
      return graphs;
    },
  },
  getGraph: {
    type: GraphType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    description: "Returns one single graph",
    async resolve(parent: any, args: any) {
      const graph = await Graph.findOne({ _id: args.id });
      return graph;
    },
  },
};
