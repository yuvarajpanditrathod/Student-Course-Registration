// models/Course.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Course', CourseSchema);
