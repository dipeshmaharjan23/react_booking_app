const express = require('express');

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("this is rooms endpoint")
})
router.get("/register",(req,res)=>{
    res.send("this is rooms register endpoint")
})

module.exports = router;