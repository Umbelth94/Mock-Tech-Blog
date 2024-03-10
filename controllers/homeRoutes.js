const router = require('express').Router();
const { User, Comment, BlogPost } = require ('../models');

//Currently shows all blog posts (sends through the data)
//Need to make this actually populate the home page
router.get('/', async (req, res) => {
    try{
        const Blogdata = await User.findAll({
            include: [
                {model: BlogPost,},
            ],
        }
        )
        res.json(Blogdata);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;