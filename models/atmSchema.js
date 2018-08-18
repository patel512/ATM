const mongoose = require('mongoose');

var atmSchema = new mongoose.Schema({
    atm_id: {
        type: String,
        unique: true,
        required: true
    },
    currencyDenomination: [{
        denomination:Number,
        count:Number
    }]
    // count: {
    //     type: Number,
    //     required: true
    // }
});



atmSchema.pre('save', function (next) {
    next();
});
const atm = module.exports = mongoose.model('atm', atmSchema);
