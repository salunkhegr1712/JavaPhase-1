// we are ging to use the fetch function inorder to fetch info from website 
const url = "https://randomuser.me/api"

fetch(url).then(responce=>{

      return responce.json()

}).then(data=> {
      console.log(data)
      // {
      //       results: [
      //         {
      //           gender: 'female',
      //           name: [Object],
      //           location: [Object],
      //           email: 'monika.meyer@example.com',
      //           login: [Object],
      //           dob: [Object],
      //           registered: [Object],
      //           phone: '076 910 94 21',
      //           cell: '076 541 21 67',
      //           id: [Object],
      //           picture: [Object],
      //           nat: 'CH'
      //         }
      //       ],
      //       info: { seed: 'de310acc635856ff', results: 1, page: 1, version: '1.4' }
      // }
      console.log(data.info);
      // { seed: '78fa19655e1e457b', results: 1, page: 1, version: '1.4' }
})