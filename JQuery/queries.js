// you can pass the values using a object whoch is a very great feature we get in jquery 
$("li").css({
      color:"red",
      backgroundColor:"grey",
      fontSize:"27px",
      listStyle:"none"
})
console.log($("li").text());
$("li").text("hello <br> world!")
// hello <br> world!
// hello <br> world!
// hello <br> world!

$("li").html("hello <br> world!")
// hello
// world!
// hello
// world!
// hello
// world!

// lets append and prepend on each of the Element 
$("h1").prepend("content starts ")
$("h1").append(" content ends")

// {content starts} Lorem ipsum dolor sit amet consectetuer adipiscing elit {content ends}

// add the class to an Element
m=$("img")
m.addClass("grs")

// hasClass function is used in order check that a Element has specific class or not 
console.log(m.hasClass("grs"))
// true

// attr function is used in order to add attribute to Element 
console.log(m.attr("class")) 

// attr can be used to add attr 
console.log(m.attr("src","https://placehold.co/100x100"))
// grs

// chaining in jquery 
console.log(m.addClass("iAm").css({backgroundColor:"red",color:"green",}).hasClass("iAm")) //true




