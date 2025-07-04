function debounce(fn,delay){
    let timeId;
    return function(...args) {
        clearTimeout(timeId);
       timeId= setTimeout(()=>{
        fn(...args)
       },delay);
        
    }
}
const search=((query)=>{
    console.log(`searching  for ` , query);
    
})



const searchDebounce = debounce(search,10);
searchDebounce('ha')
searchDebounce('hard')
searchDebounce('hard js ')
searchDebounce('hard js inter')
searchDebounce('hard js interview')
searchDebounce('hard js interview questions')