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
  editGraph: {
    type: GraphQLString,
    description: "Create graph",
    args: {
      graph: { type: new GraphQLNonNull(GraphInputType) },
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent: any, args: any) {
      try {
        await Graph.updateOne({ _id: args.id }, args.graph);
        return args.id;
      } catch (error) {
        throw new GraphQLError(`Error when creating graph: ${error}`);
      }
    },
  },
};
