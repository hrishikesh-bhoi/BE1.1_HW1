const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
    bankName: String,
    cardNumber: String,
    expireDate: String,
    cardHolderName: String,
    cardType: String,
});

const CreditCard = mongoose.model("CreditCard", creditCardSchema);
module.exports = CreditCard;
