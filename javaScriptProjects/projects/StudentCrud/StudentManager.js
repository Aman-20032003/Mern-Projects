import { Student } from './Student.js';

// let age=18;
//  const promise = new Promise((resolve,reject)=>{
//     if(age==19){
//     resolve("the promise is resolved.....");
//     }
//     else{
//         reject("the promise is rejected");
//     }
//  });
//  promise.then((result)=>console.log(result)
//  )
//  promise.catch((err)=>console.log(err)
//  )

// const Student = require("./Student");


// function sum(value1, value2, value){
//    console.log(value1+value2);
// }

// function result(val1,val2){
//     return val1+val2;
    
// }
// sum(1,2,result());


// let a =10;
// let b =20;
// let c =50;
// let d = 90;
// let e =  ++a + b++ + c++ + ++c + ++d + d++;

// console.log(a); // 10   11

// console.log(b); // 21  21

// console.log(c); // 51   52 

// console.log(d); //91 92
// console.log(e); // 173  


 for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    process.stdout.write("*");  // use write() to stay on the same line
  }
  console.log(); // moves to the next line
}


const student = new Student();
student.greet();
 
