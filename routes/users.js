// models/user.js

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/testingfordeployment");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
