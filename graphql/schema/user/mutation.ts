import { GraphQLError, GraphQLString, GraphQLNonNull } from "graphql";
import * as bcrypt from "bcrypt";
import { User } from "../../../models";
import { Role } from "../../../data";

export const UserMutation = {
  register: {
    type: GraphQLString,
    description: "Create user",
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      role: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent: any, args: any) {
      const hashedPassword = await bcrypt.hash(args.password, 10);
      let newUser = new User({
        email: args.email,
        password: hashedPassword,
        role: Role[args.role as keyof typeof Role],
      });
      try {
        newUser = await newUser.save();
        return newUser._id;
      } catch (error) {
        throw new GraphQLError(`Error when creating user: ${error}`);
      }
    },
  },
};
