import { GraphQLString } from "graphql";
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
};
