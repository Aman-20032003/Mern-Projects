const button= document.getElementById("click-button");
const uname= document.getElementById("username");

button.addEventListener('click',()=>{
const value= uname.value;
localStorage.setItem('username',value);
})