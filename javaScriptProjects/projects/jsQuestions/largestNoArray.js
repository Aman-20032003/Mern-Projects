let num=[2,3,4,1,6];
let largest =0;
for (let index = 0; index < num.length; index++) {
if(largest<num[index]){
    largest= num[index];
}
}
console.log(largest);
