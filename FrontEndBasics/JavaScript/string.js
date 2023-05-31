str="hello world i am ghansham world "

console.log(str.length); //25

// search in string using indexof and last index of 
// these functions will return negative value if substring not found in main string 
console.log(str.indexOf("world")) //6
console.log(str.lastIndexOf("world")) //26

// you can also provide starting address 
console.log(str.indexOf(("world"),10)) //26

// write function to find substring from string 
function searchSubstring(sub,str){
      return str.indexOf(sub)
}

console.log(searchSubstring("ghaansham",str)) //17

