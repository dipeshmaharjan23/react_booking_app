const express = require('express');

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("this is users endpoint")
})
router.get("/register",(req,res)=>{
    res.send("this is users register endpoint")
})

module.exports = router;