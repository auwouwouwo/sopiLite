const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    username: {type:String, required:true},
    email   : {type:String, required:true},
    password: {type:String, required:true},
    konfPass: {type:String, required:true}
});

module.exports = mongoose.model("Register",registerSchema);
