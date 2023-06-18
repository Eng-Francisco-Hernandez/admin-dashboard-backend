import { GraphQLError, GraphQLString, GraphQLNonNull } from "graphql";
import * as bcrypt from "bcrypt";
import { RefreshToken, User } from "../../../models";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../../../lib";
import AuthorizationType from "./types";

export const AuthorizationMutation = {
  login: {
    type: AuthorizationType,
    description: "Login action",
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent: any, args: any) {
      const user = await User.findOne({ email: args.email });
      if (!user) throw new GraphQLError("Email not found");
      if (!(await bcrypt.compare(args.password, user.password!)))
        throw new GraphQLError("Wrong password");
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      if ((await RefreshToken.findOne({ userId: user._id })) !== null) {
        await RefreshToken.updateOne(
          { userId: user._id },
          { refreshToken: refreshToken }
        );
      } else {
        let newRefreshToken = new RefreshToken({
          userId: user._id,
          refreshToken: refreshToken,
        });
        try {
          newRefreshToken = await newRefreshToken.save();
        } catch (error) {
          throw new GraphQLError(`Error when loggin in user: ${error}`);
        }
      }
      return {
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    },
  },
  logout: {
    type: GraphQLString,
    description: "Logout",
    async resolve(parent: any, args: any, context: any) {
      try {
        await RefreshToken.deleteOne({ userId: context.user._id });
      } catch (error) {
        throw new GraphQLError(`Error when loggin out user: ${error}`);
      }
      return context.user._id;
    },
  },
  refreshToken: {
    type: GraphQLString,
    description: "Refresh token",
    args: {
      token: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent: any, args: any) {
      const refreshToken = await RefreshToken.findOne({
        refreshToken: args.token,
      });
      if (refreshToken === null) throw new GraphQLError("Unauthorized");
      try {
        const newAccessToken = verifyRefreshToken(refreshToken.refreshToken!);
        return newAccessToken;
      } catch (error) {
        throw new GraphQLError("Forbidden");
      }
    },
  },
};
