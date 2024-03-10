const router = require('express').Router();
const withAuth = require('../../utils/auth.js')
const { User, BlogPost } = require('../../models/');

// Create a user
router.post('/signup', async (req,res) => {
    try {
        User.create(req.body)
        .then((newUser) => {
            res.json(newUser);
        })
        .catch((err) => {
            res.json(err)
        })
    } catch (err) {
        res.status(400).json(err);
    }
})

//When hitting the /login endpoint, 
router.post('/login', async (req,res) => {
    try {
        const userData = await User.findOne({ where: { name: req.body.name}});
        if (!userData) {
            res.status(400).json({message: 'Incorrect username or password, please try again'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({message: 'Incorrect username or password, please try again'});
        }

        //S
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!'})
        });
    } catch (err) {
        res.status(400).json(err)
    }

    });

//When hitting the /logout endpoint, log out the user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        res.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// View all users (For Testing purposes)
router.get('/', async (req, res) => {
    try{
        const usersData = await User.findAll({
            include: [
                {model:BlogPost},
            ],
        });
        res.json(usersData);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;