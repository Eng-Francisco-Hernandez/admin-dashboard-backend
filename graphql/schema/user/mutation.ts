import { GraphQLString } from "graphql";

export const UserMutation = {
  createUser: {
    type: GraphQLString,
    description: "Create user",
    args: {
      userId: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
      return "user._id";
    },
  },
};
