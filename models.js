const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    balance: {
        type: Number, 
        
    },
});

module.exports = mongoose.model('Bank', bankSchema);

