const express = require('express');
const fs = require('fs');

let users = require('./MOCK_DATA.json');
const { log } = require('console');
const app = express();

const PORT = 8080;

app.use(express.json());

app.get("/users", (req, res) => {
    res.json(users);
})


app.post("/create", (req, res) => {
    const body = req.body;

    users.push({ ...body, id: users.length + 1 });

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err)
            console.log(err);
        res.json({ messsage: "user data inserted successfully" });
    });

})


app.delete("/delete/:id",(req,res)=>{
const userId= Number(req.params.id);

const findId= users.filter(user=>user.id!== userId);

users=findId;
 fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),err=>{
    if(err) res.json({error:err});
    res.json({message:"user deleted suceessfully"});
 })

})



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})