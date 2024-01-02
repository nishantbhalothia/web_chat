const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const User = require('./models/user');
const Contact = require('./models/contacts');
const port = process.env.PORT || 3000;
const cors = require('cors');
const session = require('express-session');

// const dummyContacts = require('./data/dummy-contacts')

const app = express();

// ==============================================================================================================
// ==================================== necessary middlewares(.use)  ============================================

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
// ==============================================================================================================
// ==================================== setting up session  =====================================================

app.use(session({
    name: 'webChat',
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
}));


// ==============================================================================================================
// ============================= all routes will be hahdeled by ./routes/index.js  ==============================
app.use('/', require('./routes/index'));


// ==============================================================================================================
// ======================================= app is listening to the port  ========================================
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
