export function getPosts(){
    // ritorno una promise
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .catch(error => console.log("Si è verificato un errore!",error))
};