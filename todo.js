export async function gettodos(){
    
    const todoResponse = await fetch ("https://jsonplaceholder.typicode.com/todos")
    if(!todoResponse.ok){
    throw new Error("post api failed")
}


    return todoResponse.json();

}
