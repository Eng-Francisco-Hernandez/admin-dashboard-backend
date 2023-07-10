import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from "graphql";

export const DataType = new GraphQLObjectType({
  name: "Data",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    uv: { type: new GraphQLNonNull(GraphQLInt) },
    pv: { type: new GraphQLNonNull(GraphQLInt) },
    amt: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

export default DataType;
