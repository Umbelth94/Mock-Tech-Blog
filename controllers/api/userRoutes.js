const router = require('express').Router();
const { User } = require('../../models/');

//When hitting the /login endpoint, 
router.post('/login', async (req,res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email}});
        if (!userData) {
            res.status(400).json({message: 'Incorrect email or password, please try again'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({message: 'Incorrect email or password, please try again'});
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

//When hitting the logout endpoint, log out the user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        res.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;