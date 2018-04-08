
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