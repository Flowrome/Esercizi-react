export function getPeople(){
    
    return fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      //mode: 'no-cors',
      //headers: {"Content-type": "application/json;charset=UTF-8"}
    }).then(response => response.json())  // convert to json
      /*.then(usersList => {
        console.log(usersList);
        list = usersList.map((val) => {
          <Row key={val.id} name={val.name} surname={val.username}/>
        });
        console.log(list);
      }) */
      .catch(error => console.log("Si è verificato un errore!",error))
    
    }