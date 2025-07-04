 const { get } = require('mongoose');
const {getUser} = require('../service/Auth');
 
 async function restictToUserLoggedInOnly(req,res,next) {
    const userId = req.cookies?.UId;
if (!userId){
    return res.json({message:"please Login first"});
}
const user = getUser(userId);
if(!user) return res.json({message:"please login first"});

req.user= user;
next();
 
    
 }

 module.exports={
    restictToUserLoggedInOnly
 }