import http from 'http';
import mongoose from 'mongoose';
import Student from './StudentModel.js';
import { Student as StudentClass } from './Student.js';
import { stringify } from 'querystring';

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/studentsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Create HTTP Server
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/students') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const newStudent = new StudentClass(data.name, data.age, data.city);

                const student = new Student({
                    name: newStudent.name,
                    age: newStudent.age,
                    city: newStudent.city
                });
 
                await student.save();

                res.writeHead(201, { 'Content-Type': 'application/json' });
                 res.end(JSON.stringify(student));
                // res.end(JSON.stringify({message:"Student Created Successfully.."}))
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: err.message }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
