import { GraphQLError, GraphQLString } from "graphql";
import { UserType } from "./types";
import { User } from "../../../models";

export const UserQuery = {
  getUser: {
    type: UserType,
    description: "Returns user",
    args: {
      id: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
      const user = await User.findOne({ _id: args.id });
      return user;
    },
  },
  getUserRole: {
    type: GraphQLString,
    description: "Returns user role",
    async resolve(parent: any, args: any, context: any) {
      try {
        return context.user.role;
      } catch (error) {
        throw new GraphQLError(`Error when getting user role: ${error}`);
      }
    },
  },
};
