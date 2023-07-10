import { AuthorizationMutation } from "./authorization";
import { DataQuery } from "./data";
import { UserMutation, UserQuery } from "./user";

export const RootQuery = {
  ...UserQuery,
  ...DataQuery
};

export const RootMutation = {
  ...UserMutation,
  ...AuthorizationMutation,
};
