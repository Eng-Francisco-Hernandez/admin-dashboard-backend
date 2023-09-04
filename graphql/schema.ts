import { RootMutation, RootQuery } from "./schema/index";

const graphql = require("graphql");
const { GraphQLSchema, GraphQLObjectType } = graphql;

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: RootQuery,
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: RootMutation,
  }),
});
