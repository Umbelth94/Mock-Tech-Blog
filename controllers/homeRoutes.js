const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        res.send('This is the home page');
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;