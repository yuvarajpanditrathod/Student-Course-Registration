// routes/course.js
const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Add new course (admin only)
router.get('/add', (req, res) => {
    res.render('addCourse');
});

router.post('/add', async (req, res) => {
    const { name, description } = req.body;
    const newCourse = new Course({ name, description });
    await newCourse.save();
    res.redirect('/admin');
});

module.exports = router;
