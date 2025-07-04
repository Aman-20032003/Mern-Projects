let str = "qwertyui";
str= str.toLowerCase();
let vowels =0;
for (let index = 0; index < str.length; index++) {
    if (str.charAt(index) === 'a' || str.charAt(index) === 'e' || str.charAt(index) === 'i' || str.charAt(index) === 'o' || str.charAt(index) === 'u') {
      vowels++;
    }
}
console.log(`total vowels is in a string are ${vowels}`);
