const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const app = express();

// Connect to DB
connectDB();
    
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

// Express session
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

// Passport
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Flash
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user;
    next();
});

// Routes
app.use('/', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);


// Server
app.listen(3000, () => console.log("Server started on http://localhost:3000"));
