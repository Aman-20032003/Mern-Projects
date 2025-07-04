const loginService= require('../Service/UserLogin');

async function login(req,res) {
  console.log(req.body);
  
    const response= await loginService(req.body);
    console.log(response);
    
if (!response || response.status!==200) {
    return  res.json(response);
}
  return res.json(response);
}

module .exports=login;