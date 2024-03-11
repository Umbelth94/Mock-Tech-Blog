const router = require('express').Router();
const withAuth = require('../../utils/auth.js')
const { User, BlogPost } = require('../../models/');

//Create blog post
router.post('/', withAuth, async (req, res) => {
    try{
        const newPost = await BlogPost.create({
            ...req.body,
            author_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch(err){
        res.status(500).json({ error: "Failed to create post"});
        console.error('Error creating post:', err);
    }
})

module.exports = router;