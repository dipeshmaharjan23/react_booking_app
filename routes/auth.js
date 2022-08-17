const express = require('express');
const register = require('../controllers/auth')

const router = express.Router();

// router.get("/",(req,res)=>{
//     res.send("this is auth endpoint")
// })
router.post("/register",register)

module.exports = router;