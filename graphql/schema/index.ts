import { UserMutation, UserQuery } from "./user";

export const RootQuery = {
  ...UserQuery,
};

export const RootMutation = {
  ...UserMutation,
};
