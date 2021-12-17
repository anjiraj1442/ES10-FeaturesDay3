/*The toString() method returns a string representing the source code of the function.
Earlier white spaces,new lines and comments will be removed when you do now they are retained with original source code*/
function test(text){
     var name=text;
     console.log(`Hello ${name}`)
 }
 
 console.log(test.toString())