const express = require('express');
const router = express.Router();
const User = require('../models/User');

function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}

// Student Dashboard
router.get('/', ensureAuth, (req, res) => {
    if (req.user.isAdmin) return res.redirect('/dashboard/admin');
    res.render('dashboard', { user: req.user });
});

// Student selects courses
router.post('/select-courses', ensureAuth, async (req, res) => {
    await User.findByIdAndUpdate(req.user.id, { selectedCourses: req.body.courses });
    res.redirect('/dashboard');
});

// Admin View
router.get('/admin', ensureAuth, async (req, res) => {
    if (!req.user.isAdmin) return res.redirect('/dashboard');
    const users = await User.find({ isAdmin: false });
    res.render('admin', { users });
});

module.exports = router;
