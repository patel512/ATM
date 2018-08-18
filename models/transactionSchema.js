const mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
    card_number: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    currency_denomination:{
        type:Number,
        required: true
    },
    count:{
        type: Number
    },
    transactionDate: {
        type: Date,
        required:true
    }
});



transactionSchema.pre('save', function (next) {
    next();
});
const txschema = module.exports = mongoose.model('txschema', transactionSchema);
