import { GraphQLObjectType, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  description: "User type representation",
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

export default UserType;
