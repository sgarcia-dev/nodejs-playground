var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    childid: String
});

module.exports = mongoose.model('user', userSchema);