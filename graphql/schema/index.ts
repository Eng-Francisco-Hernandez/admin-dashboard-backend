import { AuthorizationMutation } from "./authorization";
import { GraphQuery } from "./graph";
import { GraphMutation } from "./graph/mutation";
import { UserMutation, UserQuery } from "./user";

export const RootQuery = {
  ...UserQuery,
  ...GraphQuery,
};

export const RootMutation = {
  ...UserMutation,
  ...AuthorizationMutation,
  ...GraphMutation,
};
