const mongoose  = require("mongoose");
const express   = require("express");
const cors      = require("cors");
const url       = require("./url/url");
const router    = require("./router/route");

const app       = express();
const db        = mongoose.connection;

const server    = async()=>{try{url()}catch(e){handleError(e)}};

db.on("error", (e)=>logError(e));
db.once("open", ()=>console.log("Database telah terkoneksi..."));

app.use(express.json());
app.use(cors());
app.use(router);

server();

app.listen(5000, ()=>console.log("Server terkoneksi di port 5000..."));
