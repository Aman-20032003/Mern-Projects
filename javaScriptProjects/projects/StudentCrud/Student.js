// const Person = require('./Person');
 export class Student {
constructor(id, name , age ){
    super();
    this.age=age;
    this.id=id;
    this.name= name;
}

 static greet(){
    console.log("hello");
    
}
}


module.exports = Student;