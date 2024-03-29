
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String },
    accountType: { type: String }
});

module.exports = mongoose.model("User", UserSchema);
