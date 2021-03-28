const { User, Post, Comment } = require("../models");
const { UserType, PostType, CommentType } = require("./types");
const graphql = require("graphql");

const { GraphQLList, GraphQLID } = graphql;

const user = {
  type: UserType,
  description: "Retrieve single user",
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return User.findById(args.id);
  },
};

const users = {
  type: new GraphQLList(UserType),
  description: "Retrieve list of users",
  resolve(parent, args) {
    return User.find();
  },
};

const post = {
  type: PostType,
  description: "Retrieve single post",
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Post.findById(args.id);
  },
};

const posts = {
  type: new GraphQLList(PostType),
  description: "Retrieve list of posts",
  resolve(parent, args) {
    return Post.find();
  },
};

const comment = {
  type: CommentType,
  description: "Retrieve single comment",
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Comment.findById(args.id);
  },
};

const comments = {
  type: new GraphQLList(CommentType),
  description: "Retrieve list of comments",
  resolve(parent, args) {
    return Comment.find();
  },
};

module.exports = { user, users, post, posts, comment, comments };
