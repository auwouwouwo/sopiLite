const mongoose  = require("mongoose");
const express   = require("express");
const cors      = require("cors");
const router    = require("./router/route");

const app       = express();

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://auwouwouwo:vOgqo9pxZsBgBsyT@cluster0.hznhnn3.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser     : true,
    useUnifiedTopology  : true
});

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(5000, ()=>console.log("Server terkoneksi di port 5000..."));
