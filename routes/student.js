// routes/student.js
const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const Student = require('../models/User');
const { ensureAuthenticated } = require('../config/auth');

// Dashboard route
// Save course selection
router.post('/dashboard',ensureAuthenticated, async (req, res) => {
    const selectedCourses = Array.isArray(req.body.courses) ? req.body.courses : [req.body.courses];

    try {
        await Student.findByIdAndUpdate(req.user._id, { courses: selectedCourses });
        req.flash('success_msg', 'Successfully registered courses!');
        res.redirect('/dashboard');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Something went wrong while saving courses.');
        res.redirect('/dashboard');
    }
});

module.exports = router;
