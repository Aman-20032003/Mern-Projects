const http = require('http');
const Student= require('./Student.js');
const request= require('./req');
const server= http.createServer((req,res)=>{
if (req.method==='POST' && req.url==='/login') {
    let body="";
    req.on('data',chunk=>{
      body+=chunk.toString();
    });
try{
    req.on('end',()=>{
        const parsed = JSON.parse(body);
        const userReq = new request(parsed);
        const result = login(userReq);

    res.writeHead(result.status,{'content-type':'application/json'});
    res.end(JSON.stringify(result));
    })
}catch(err){
res.writeHead(400,{'content-type':'application/json'});
res.end(JSON.stringify({success:false,message:"bad request found"}))
}

}

else{
    res.writeHead(404,{'content-type':'application/json'})
    res.end(JSON.stringify({message:'routes not found'}))
}
})
let port = 3000;
server.listen(port,(()=>{
console.log(`server is running on port ${port}`);

}))


function login(request){
if (request.email===null || request.name===null) {
   
    return{
        status:404,
        success :false,
        message:"fill all of the fileds"
    }
}
else if (request.name==='Aman' && request.email==='aman@gmail'){
    return{
        status:200,
        success:true,
        message:'Student login successfully'
    }
}else{
    return{
        status:401,
        success:false,
        message:'invalid email or password'
    }
}

}