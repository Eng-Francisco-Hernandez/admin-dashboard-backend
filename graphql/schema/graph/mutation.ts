import { GraphQLError, GraphQLString, GraphQLNonNull } from "graphql";
import { GraphInputType } from "./types";
import { Graph } from "../../../models";

export const GraphMutation = {
  createGraph: {
    type: GraphQLString,
    description: "Create graph",
    args: {
      graph: { type: new GraphQLNonNull(GraphInputType) },
    },
    async resolve(parent: any, args: any) {
      let newGraph = new Graph(args.graph);
      try {
        newGraph = await newGraph.save();
        return newGraph._id;
      } catch (error) {
        throw new GraphQLError(`Error when creating graph: ${error}`);
      }
    },
  },
};
