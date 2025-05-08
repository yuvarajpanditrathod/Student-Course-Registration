// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: { type: Boolean, default: false },
    selectedCourses: [String]
});

module.exports = mongoose.model('User', UserSchema);
