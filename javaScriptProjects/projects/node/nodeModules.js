// const os = require('os');
// console.log(os.tmpdir());
// console.log(os.totalmem());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.machine());


// const { log } = require('console');
// const fs = require('fs');
// const file=fs.writeFile("myfile.txt","this is a demo file",()=>{
//     console.log("written to the file");

// });

// const file = fs.writeFileSync("myfile.txt", "this is a demo file with demo words ");


// fs.readFile("myfile.txt", "utf8", (err, data) => {
//     console.log(err, data);
// })
// const read=fs.readFileSync("myfile.txt","utf8")
// console.log(read);

// console.log("finished reading file");


import url, { URL } from 'node:url';
const myURL =
  new URL('https://example.org:81/foo');
  console.log(myURL);
  