const { default: mongoose } = require('mongoose');
const mongose = require('mongoose');
require('dotenv').config();
//const mongoURL = 'mongodb+srv://ghevariyatrupesh4:Trupesh4445@cluster0.udpvnxf.mongodb.net/'
const mongosURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
    useNewUrlparser: true,
    useUnifiedTOpology: true
})

const db = mongose.connection;

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