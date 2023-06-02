var url = "https://jsonplaceholder.typicode.com/users/2";

function firstStage(){

      return fetch(url).then(function (responce) {
            return responce.json();
      })
}

// the async function is function which internally haas await keyword 
async function secondStage(){
      const user=await firstStage()
      console.log(user)
}

// {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
// address
// : 
// {street: 'Victor Plains', suite: 'Suite 879', city: 'Wisokyburgh', zipcode: '90566-7771', geo: {…}}
// company
// : 
// {name: 'Deckow-Crist', catchPhrase: 'Proactive didactic contingency', bs: 'synergize scalable supply-chains'}
// email
// : 
// "Shanna@melissa.tv"
// id
// : 
// 2
// name
// : 
// "Ervin Howell"
// phone
// : 
// "010-692-6593 x09125"
// username
// : 
// "Antonette"
// website
// : 
// "anastasia.net"
// [[Prototype]]
// : 
// Object