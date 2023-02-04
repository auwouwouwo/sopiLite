const mongoose  = require("mongoose");
const url       = ()=>{
    mongoose.set("strictQuery", true);
    u = mongoose.connect(`mongodb+srv://auwouwouwo:vOgqo9pxZsBgBsyT@cluster0.hznhnn3.mongodb.net/?retryWrites=true&w=majority`); 
    return (u);
}

module.exports  = url;
