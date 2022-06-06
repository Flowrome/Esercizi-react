export function getUsers(){
    // ritorno una promise
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .catch(error => console.log("Si è verificato un errore!",error))
};