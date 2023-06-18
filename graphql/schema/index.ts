import { AuthorizationMutation } from "./authorization";
import { UserMutation, UserQuery } from "./user";

export const RootQuery = {
  ...UserQuery,
};

export const RootMutation = {
  ...UserMutation,
  ...AuthorizationMutation,
};
