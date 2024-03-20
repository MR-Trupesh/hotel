const mongoose = require('mongoose');
require('dotenv').config();

const mongosURL = process.env.MONGODB_URL;

mongoose.connect(mongosURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected');
});

db.on('error', (err) => {
    console.log('MongoDB connected err!', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected!');
});

module.exports = db;