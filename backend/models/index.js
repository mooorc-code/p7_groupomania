const Users = require('../models/Users');
const Posts = require('../models/Posts');
const Comments = require('../models/Comments');
const Likes = require('../models/Likes');

Users.hasMany(Posts);
Users.hasMany(Comments);
Users.hasMany(Likes);
Posts.hasMany(Comments);
Posts.hasMany(Likes);
Posts.belongsTo(Users);
Comments.belongsTo(Users);
Comments.belongsTo(Posts);
Likes.belongsTo(Users);
Likes.belongsTo(Posts);

module.exports = {
  Users,
  Posts,
  Comments,
  Likes
};
