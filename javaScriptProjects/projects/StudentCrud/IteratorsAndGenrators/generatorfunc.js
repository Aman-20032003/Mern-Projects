function* myGenerator(start,end,step){
    for (let index = start; index <= end; index+=step) {
        yield(index);
        
    }

}

const generate = myGenerator(0,10,2);
for (const g of generate) {
    console.log(g);
    
}