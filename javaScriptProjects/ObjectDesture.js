// const obj ={  
//     name :"aks",
//     age :30,
//     salary:10000
// }

// const {name,salary}=obj
// console.log(name);
// console.log(salary);



//* nested object desturing 

const user={
    id:123,
    address:{
     ads1:"asd",
     ads2:"hhh"
    }
}

const{id,address:{ads2}}=user
console.log(id);
console.log(ads2);



