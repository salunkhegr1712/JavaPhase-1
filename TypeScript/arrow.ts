let a=[1,3,4,12,44,235,2,2,3,421,133]


let z=a.filter((item)=>{
      if(item%2===0) 
            return true
      else false
})

// this will return a list 
console.log(z)
// [ 4, 12, 44, 2, 2 ]