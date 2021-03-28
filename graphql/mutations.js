const { UserType, PostType, CommentType } = require("./types");
const { User, Post, Comment } = require("../models");
const graphql = require("graphql");

const { GraphQLString, GraphQLNonNull } = graphql;

const addUser = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    displayName: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args) {
    const { username, password, email, displayName } = args;
    let user = new User({ username, password, email, displayName });
    await user.save();
    return user;
  },
};

const addPost = {
  type: PostType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args) {
    const { title, body, userId } = args;
    let post = new Post({ title, body, userId });
    await post.save();
    return post;
  },
};

const addComment = {
  type: CommentType,
  args: {
    comment: { type: new GraphQLNonNull(GraphQLString) },
    postId: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args) {
    const { comment, postId, userId } = args;
    let cmObj = new Comment({ comment, postId, userId });
    await cmObj.save();
    return cmObj;
  },
};

module.exports = { addUser, addPost, addComment };
