const express = require('express');
const router = express.Router();
const Student = require('../routes/student');
const { ensureAuthenticated } = require('../config/auth');

// Admin check middleware
const isAdmin = (req, res, next) => {
  if (req.user && req.user.email === 'admin@example.com') {
    return next();
  } else {
    req.flash('error_msg', 'Not authorized');
    res.redirect('/login');
  }
};

// Admin dashboard
router.get('/dashboard', ensureAuthenticated, isAdmin, async (req, res) => {
  try {
    const students = await Student.find();
    res.render('admin_dashboard', { students });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
