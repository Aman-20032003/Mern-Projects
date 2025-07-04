const express = require('express')
let users = require('./MOCK_DATA.json')
const fs = require('fs')
const {connectMongodb} = require('./connection')

const userRouter= require('./Routes/user')

const app = express();

const PORT = 3000;
app.use(express.json());

connectMongodb("mongodb://127.0.0.1:27017/user-1");
app.use("/user",userRouter);




app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})

