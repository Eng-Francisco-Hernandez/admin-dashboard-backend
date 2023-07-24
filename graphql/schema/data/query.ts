import { GraphQLList, GraphQLString } from "graphql";
import { DataType } from "./types";

export const DataQuery = {
  getData: {
    type: new GraphQLList(DataType),
    description: "Returns data set",
    args: {
      id: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
      return [
        {
          pv: 2400,
        },
        {
          pv: 1398,
        },
        {
          pv: 9800,
        },
        {
          pv: 3908,
        },
        {
          pv: 4800,
        },
        {
          pv: 3800,
        },
        {
          pv: 4300,
        },
      ];
    },
  },
};
