const registerService= require('../Service/UserRegisteration');

async function register(req,res) {
    const response =await registerService(req.body);
     console.log(response);
     
    if(!response||response.status!==201){
      return  res.json(response);
    }
   return res.json(response);
    
}

module. exports=register;