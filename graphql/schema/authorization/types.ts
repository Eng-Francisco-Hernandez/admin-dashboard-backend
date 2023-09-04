import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";

export const AuthorizationType = new GraphQLObjectType({
  name: "Authorization",
  fields: () => ({
    accessToken: { type: new GraphQLNonNull(GraphQLString) },
    refreshToken: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export default AuthorizationType;
