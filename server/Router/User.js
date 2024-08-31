const express = require('express');
const router = express.Router();
const isUserAuthenticated=require('../middlewear/userAuth')



const { signup ,signin,getUser} = require("../controller/User")


router.post("/signup", signup)
router.post("/signin",signin)
router.get("/getUser",isUserAuthenticated,getUser)

module.exports = router