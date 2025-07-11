const loginService= require('../Service/UserLogin');
const jwt = require('jsonwebtoken');

async function login(req,res) { 
     const result = await loginService(req.body);
      console.log(result);
      
  if (result.status !== 200) {
    return res.status(result.status).json({ message: result.message });
  }

  // ✅ Set cookie with the token
  res.cookie('token', result.token, {
    httpOnly: true,
    secure: false,           // set true in production with HTTPS
    sameSite: 'Lax',
    maxAge: 60 * 60 * 1000   // 1 hour
  });

  return res.status(200).json({
    message: result.message,
    user: result.user,
    success:result.success
  });
}

module .exports=login;