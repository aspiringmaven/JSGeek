/**
 * Array
 */


 var array = [];

 array.push(1);
 array.push(2);
 array.push(3);

 delete array[1];

 console.log('length of Array > ' + array.length); //size of array

 array.forEach(function(element) {
     console.log(element);
 }, this);

 