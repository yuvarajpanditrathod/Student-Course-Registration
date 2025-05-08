// config/db.js
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://yuvrajrathod870:root@cluster0.abcd123.mongodb.net/student-registration?retryWrites=true&w=majority');
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;
