import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType,
} from "graphql";

export const PointType = new GraphQLObjectType({
  name: "Point",
  fields: () => ({
    data: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

export const GraphType = new GraphQLObjectType({
  name: "GraphType",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    points: { type: new GraphQLList(PointType) },
  }),
});

export const PointInputType = new GraphQLInputObjectType({
  name: "PointInput",
  fields: () => ({
    data: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

export const GraphInputType = new GraphQLInputObjectType({
  name: "GraphInput",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    points: { type: new GraphQLList(PointInputType) },
  }),
});
