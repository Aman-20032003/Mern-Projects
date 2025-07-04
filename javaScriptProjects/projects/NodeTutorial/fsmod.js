const { log } = require('console');
const fs = require('fs');

fs.writeFile('./demo.txt', 'this is demo file for fs module', ((err) => {
    if (err) console.log(err);
    console.log("file written successfully");
})
);

 fs.writeFileSync('./demo.txt','this is wrtten by sync function');
console.log('file witten by sync is successfully');


fs.readFile('./demo.txt','utf-8',((err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data);   
}))

const read=fs.readFileSync('./demo.txt','utf-8');
console.log(read);

 fs.unlink('./demo.txt',((err)=>{
    if(err)console.log(err);
    console.log("file deleted successfully");
    
    
 }))
