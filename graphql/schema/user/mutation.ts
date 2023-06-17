import { GraphQLString } from "graphql";

export const UserMutation = {
  createUser: {
    type: GraphQLString,
    description: "Create user",
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
      console.log(args);
      return "";
    },
  },
};
