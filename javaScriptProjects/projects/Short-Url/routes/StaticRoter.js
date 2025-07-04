const express = require('express');
const router = express.Router();



router.get('/home', async(req,res)=>{
    const allUrls= await url.find({});
    return res.render('Home')
})

module.exports=router;