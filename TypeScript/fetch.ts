// here we are going to use the fetch api to reach a json 

const url ="https://jsonplaceholder.typicode.com/users/2"

// now lets use fetch 
fetch(url).then(function(responce){
      return responce.json()
}).then(function(user){
      console.log("user is : ",user)
})

// this is json data 
// {
//       results: [
//         {
//           gender: 'female',
//           name: [Object],
//           location: [Object],
//           email: 'gwendolyn.burns@example.com',
//           login: [Object],
//           dob: [Object],
//           registered: [Object],
//           phone: '(572) 875-2130',
//           cell: '(811) 521-9935',
//           id: [Object],
//           picture: [Object],
//           nat: 'US'
//         }
//       ],
//       info: { seed: '799ba31e8fcd746c', results: 1, page: 1, version: '1.4' }
//     }