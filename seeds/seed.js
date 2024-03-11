// Import necessary modules
const sequelize = require('../config/connection.js')
const { User, BlogPost, Comment } = require('../models');

// Define the seeding function
const seedDatabase = async () => {
    await sequelize.sync({ force: true})
    // Create a user
    const user = await User.create({
        name: 'User One',
        password: 'password123'
    });

    const user3 = await User.create({
        name:'Anthony',
        password:'Irrelevant90'
    })

    // Create blog posts under the user
    const blogPost1 = await BlogPost.create({
        title: 'How to make an omellete',
        body_content: 'Break a few eggs',
        date_created: new Date(),
        author_id: user.id
    });

    const blogPost2 = await BlogPost.create({
        title: 'Wish You Were Here',
        body_content: 'This is a Pink Floyd song that is pretty good',
        date_created: new Date(),
        author_id: user3.id
    });

    const blogPost3 = await BlogPost.create({
        title: 'Third Blog Post',
        body_content: 'This is the content of the third blog post.',
        date_created: new Date(),
        author_id: user.id
    });

    // Create another user for comments
    const anotherUser = await User.create({
        name: 'AngryCommentor',
        password: 'password456'
    });

    // Create comments for one of the blog posts
    const comment1 = await Comment.create({
        author_id: anotherUser.id,
        blogPost_id: blogPost1.id, // Assuming blogPost1 is the target blog post
        date_created: new Date(),
        content: 'I got confused and broke an omellete to make eggs'
    });

    const comment2 = await Comment.create({
        author_id: anotherUser.id,
        blogPost_id: blogPost1.id, // Assuming blogPost1 is the target blog post
        date_created: new Date(),
        content: 'I cant believe you would do this'
    });

    console.log('Seed data inserted successfully.');
};

// Invoke the seeding function
seedDatabase();