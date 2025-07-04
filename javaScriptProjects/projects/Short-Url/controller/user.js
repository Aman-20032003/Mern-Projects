const user = require('../models/user');
const {v4:uuidv4}= require('uuid');

const{setUser}= require("../service/Auth");  
async function handleUserSignup(req,res) {
    const {email,password}= req.body;
    await user.create({
    email,
    password
    });
res.status(201).json({message:'user signup successfully',success:'true'})
}


async function handleUserLogin(req,res) {
    const {email,password}= req.body;
  const findUser= await user.findOne({email,password});

if(!findUser){
    res.status(404).json({error:'invalid email or password', success:false});
}
const sessionId = uuidv4();
setUser(sessionId,findUser);
res.cookie("UId",sessionId);
res.status(200).json({message:'user  login successfully'});
    
}

module.exports={ handleUserSignup,
    handleUserLogin
} 