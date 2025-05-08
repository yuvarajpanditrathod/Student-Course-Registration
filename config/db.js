// config/db.js
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/student-course-registration');
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;
