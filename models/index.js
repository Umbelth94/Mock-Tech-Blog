const Comment = require('./comment.js');
const BlogPost = require ('./blogPost.js');
const User = require('./user.js');

User.hasMany(BlogPost, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogPost_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPost_id'
});

Comment.belongsTo(User, {
    foreignKey: 'author_id'
})

BlogPost.belongsTo(User, {
    foreignKey: 'author_id'
})