const mongoose = require('mongoose');

const MenuItrmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: false
    },
    is_drink: {
        type: Boolean,
        default: false
    }

});

const MenuItrm = mongoose.model('MenuItrm', MenuItrmSchema);
module.exports = MenuItrm;