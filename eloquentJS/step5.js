/**
 * Scope of var vs let
 */


 for(var index = 1; index<10; index++) {
     console.log(index);
 }
 console.log(index); // this will proint 10 var is accessible here.

 /*************************************************************************/


 function printer() {
    var i;
    for( i = 1; i<10; i++) {
        console.log(i);
    }
 }

 printer();
 //console.log(i); // error here as i is undefine outside curly braces

 /******************************************************************************** */


 for(let foo =1; foo <10; foo++) {
     console.log(foo);
 }
 //console.log(foo);