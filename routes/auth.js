const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Login
router.get('/', (req, res) => res.redirect('/login'));
router.get('/login', (req, res) => res.render('login'));
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

// Register
router.get('/register', (req, res) => res.render('register'));
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hash });
    await user.save();
    req.flash('success_msg', 'You are now registered. Please log in.');
    res.redirect('/login');
});

// Logout
router.get('/logout', (req, res) => {
    req.logout(() => {
        req.flash('success_msg', 'You are logged out');
        res.redirect('/login');
    });
});

module.exports = router;
