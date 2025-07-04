// import Employee from './Employee.js'
// import DbModel from "./DbModel.js";
// import mongoose from 'mongoose';
// import http from "http";

// mongoose.connect("mongodb://127.0.0.1:27017/empdb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log("mongodb Connected"))
//     .catch(err => console.error("mongodb connection error", err));

// // server creation

// const server = http.createServer((req, res) => {
//     if (req === 'POST' && req.url === "/employee") {
//         let body = "";
//         req.on('data', chunk => {
//             body += chunk.toString()
//         })

//         req.on('end', async () => {

//             try {
//                 const data = JSON.parse(body)
//                 const employee = new Employee(data.id, data.name.data.age)

//                 const emp = new DbModel({
//                     id: employee.id,
//                     name: employee.name,
//                     age: employee.age
//                 })
//                 await emp.save();
//                 res.writeHead(201, { "content-type": "application/json" })
//                 res.end({ message: "Employee created Successfully" })
//             } catch (err) {
//                 res.writeHead(400, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({ message: err.message }));
//             }

//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: "Route not found" }));
//     }
// });
// server.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });







import Employee from "./Employee.js";
import DbModel from "./DbModel.js";
import http, { Server } from "http";
import mongoose from "mongoose";



mongoose.connect("mongodb://127.0.0.1:27017/empdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("mongodb established successfully......"))
     .catch(err => console.error("Connection failed...........", err));
    

// server creation
const createServer = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url=== "/employee") {

        let body = "";

        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const employee = new Employee(data.id, data.name, data.age);
                const emp = new DbModel({
                    id: employee.id,
                    name: employee.name,
                    age: employee.age
                });
                await emp.save();
                res.writeHead(201, { "content-type": "application/json" })
                res.end(JSON.stringify({ message: "Employeee Stored Successfully" }))
            } catch (error) {

                res.writeHead(400, { "content-type": "application/json" })
                res.end(JSON.stringify({ message:error.message}))
            }

        })
    }else{
        res.writeHead(404,{"content-type":"application/json"})
        res.end(JSON.stringify({message:"Failed to Store an Employee"}))
    }
});
createServer.listen(3000,()=> {
    console.log("server is running on port 3000");
    });