let str= "madam";
let reverse= str.split('').reverse().join('');
if(str===reverse){
    console.log(`String ${str} is palindrome string`);
    
}
else{
    console.log(`String ${str} is not plaindrome string `);
    
}