import mongoose  from "mongoose";
 const schema =new  mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }

 })

const Employee=mongoose.model("Employee",schema);
export default Employee