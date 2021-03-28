const graphql = require("graphql");
const { addUser, addPost, addComment } = require("./mutations");
const { user, users, post, posts, comment, comments } = require("./queries");

const { GraphQLObjectType, GraphQLSchema } = graphql;

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  fields: {
    user,
    users,
    post,
    posts,
    comment,
    comments,
  },
});

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  fields: {
    addUser,
    addPost,
    addComment,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
