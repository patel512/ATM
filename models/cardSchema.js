const mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    card_number: {
        type: String,
        unique:true,
        required: true
    },
    pin: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        default:0
    }
});



cardSchema.pre('save', function (next) {
    next();
});
const card = module.exports = mongoose.model('card', cardSchema);
