const express =require('express');
const mongoose = require('mongoose');
 const userRouter= require ('./routes/UserRoute');
const PORT = 8001;
 const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/user_management_system", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use('/user', userRouter);

 app.listen(PORT,()=>{
console.log(`server is running on PORT ${PORT}`);

 })