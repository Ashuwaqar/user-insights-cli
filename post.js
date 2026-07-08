export async function getposts(){
    
    const postResponse = await fetch ("https://jsonplaceholder.typicode.com/posts")
if(!postResponse.ok){
    throw new Error("post api failed")
}
   return postResponse.json();
}