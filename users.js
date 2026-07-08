export async function getusers(){
    const userResponse = await fetch ("https://jsonplaceholder.typicode.com/users")
if(!userResponse.ok){
    throw new Error("user api failed")
}





    return userResponse.json();

}
