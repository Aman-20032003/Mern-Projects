let str = "abc";
let reversed = str.split('').reverse().join('');
console.log(reversed);
for (let index = str.length - 1; index >= 0; index--) {
    let rev = str.charAt(index);
    console.log(rev);

}
