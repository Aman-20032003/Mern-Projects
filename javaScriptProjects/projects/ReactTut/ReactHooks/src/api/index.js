export const GetPosts=async()=>{
 const response=await  fetch('https://jsonplaceholder.typicode.com/posts',{method:'GET'})
return await response.json();
}
export const GetRandomUser=async()=>{
    const response = await fetch("https://randomuser.me/api/",{method:'GET'});
    return await response.json();
}