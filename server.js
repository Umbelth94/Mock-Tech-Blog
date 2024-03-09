const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require ('express-handlebars');
// const routes = require('./controllers');
const helpers = require('./utils/helpers');

//Import Sequelize Connection
const sequelize = require('./config/connection');
//Initialize sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Create session middleware parameters for the express-session package
const sess = {
    secret: process.env.EXP_SESS_SEC,
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess));

// Tell Express.js to use the handlebars template engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

app.get('/', function (req, res) {
    res.send('Hello World');
})

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening at http://localhost:3001'));
});