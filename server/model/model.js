const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    question : {
        type : String,
        required: true
    },
    answer : {
        type: String,
        required: true,
        unique: true
    },
   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;