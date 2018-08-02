
/**
 * closure 
 * 
 */


 function fun(num) {
     let foo = num;
    return () => foo * foo;
 }

 const square = fun(12);

 console.log(square());

/*************************************************************************** */

 var myArrayOfFunctions = [];
 
 for(var i = 0; i<3; i++)
 {
     //Note how the function being defined uses i, 
     //where i lives in the parent's scope, this creates a closure
     myArrayOfFunctions[i] = function(a) { return a + i;}    
 }

 console.log(myArrayOfFunctions[0](5));   //Prints 8 WTF!
 console.log(myArrayOfFunctions[1](5));   //8 again
 console.log(myArrayOfFunctions[2](5));   //Well, this 8 was expected


 /*************************************************************************** */

 var myArrayOfFunctions = [];
 
 for(let i = 0; i<3; i++)
 {
     //Note how the function being defined uses i, 
     //where i lives in the parent's scope, this creates a closure
     myArrayOfFunctions[i] = function(a) { return a + i;}    
 }
/**
 * becaus elet has local scope hence it bind value not variable :)
 */
 console.log(myArrayOfFunctions[0](5));   //5
 console.log(myArrayOfFunctions[1](5));   //6 
 console.log(myArrayOfFunctions[2](5));   //7