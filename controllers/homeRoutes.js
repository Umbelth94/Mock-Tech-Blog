const router = require('express').Router();
const { User, Comment, BlogPost } = require ('../models');

//Currently shows all blog posts (sends through the data)
router.get('/', async (req, res) => {
    try{
        const dbBlogData = await BlogPost.findAll({
            include: [
                {model: User,
                attributes:['name']},
            ],
        });

        const blogPosts = dbBlogData.map((blogs) =>
        blogs.get({plain: true}))
        res.render('home', {blogPosts})
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', async (req,res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;