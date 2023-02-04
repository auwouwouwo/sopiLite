const mongoose  = require("mongoose");
const options   = {family: 4, useUnifiedTopology: true};
const url       = ()=>{
    mongoose.set("strictQuery", true);
    u = mongoose.connect(`mongodb+srv://auwouwouwo:vOgqo9pxZsBgBsyT@cluster0.hznhnn3.mongodb.net/?retryWrites=true&w=majority`,
    options); 
}

module.exports  = url;
