const express = require('express');
const router = express.Router();

router.get ('/', (req,res) => {
    console.log("success");
    res.send('Thank you for signing up!')
});

router.post('/', (req,res)=>{
    console.log("Success! New sign up detected");
    res.send("New sign up detected")
});

module.exports = router;