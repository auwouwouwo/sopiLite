const express           = require("express");
const {getRegister}     = require("../controller/control");
const {postRegister}    = require("../controller/control");

const router = express.Router();

router.get("/register",getRegister);
router.post("/register",postRegister);

module.exports = router;
