function sendChatMessage(message) {
    console.log('sending message ', message);
}


function throttle(fn, delay) {
 let lastCall = 0;
    return function(...args) {
   
    let now = Date.now();
    if (now - lastCall < delay) {
        return;
    }
    lastCall=now;
   return fn(...args);

}
}
const slowModeMessages= throttle(sendChatMessage,2000);
slowModeMessages('hi')
sendChatMessage('hello')
slowModeMessages('will there be any discount ')
slowModeMessages('courses are too much expensive ')