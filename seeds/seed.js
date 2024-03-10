// Import necessary modules
const sequelize = require('../config/connection.js')
const { User, BlogPost, Comment } = require('../models');

// Define the seeding function
const seedDatabase = async () => {
    await sequelize.sync({ force: true})
    // Create a user
    const user = await User.create({
        username: 'User One',
        password: 'password123'
    });

    // Create blog posts under the user
    const blogPost1 = await BlogPost.create({
        title: 'First Blog Post',
        body_content: 'This is the content of the first blog post.',
        date_created: new Date(),
        author_id: user.id
    });

    const blogPost2 = await BlogPost.create({
        title: 'Second Blog Post',
        body_content: 'This is the content of the second blog post.',
        date_created: new Date(),
        author_id: user.id
    });

    const blogPost3 = await BlogPost.create({
        title: 'Third Blog Post',
        body_content: 'This is the content of the third blog post.',
        date_created: new Date(),
        author_id: user.id
    });

    // Create another user for comments
    const anotherUser = await User.create({
        username: 'Another User',
        password: 'password456'
    });

    // Create comments for one of the blog posts
    const comment1 = await Comment.create({
        author_id: anotherUser.id,
        blogPost_id: blogPost1.id, // Assuming blogPost1 is the target blog post
        date_created: new Date(),
        content: 'This is the first comment for the first blog post.'
    });

    const comment2 = await Comment.create({
        author_id: anotherUser.id,
        blogPost_id: blogPost1.id, // Assuming blogPost1 is the target blog post
        date_created: new Date(),
        content: 'This is the second comment for the first blog post.'
    });

    console.log('Seed data inserted successfully.');
};

// Invoke the seeding function
seedDatabase();