const arr=[1,2,3,4,5,6,6];
// const newArr= arr.slice(0,3)  
// console.log(newArr);
                         //* then it means slice do not overrites the original arrayand return new arry
                        //  but in slice  it overrites the orignal array or change the orignal array
const anotherArr= arr.splice(0,3)
console.log(anotherArr);

console.log(arr);


