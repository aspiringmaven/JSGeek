/**
 * Prototype
 * 
 * every function has prototype proprty and
 * every object has __proto__
 *                          and both point to Prototype Object
 * 
 * HENCE
 * 
 * as we know Prototype is also an object so it also constains __proto__
 * 
 *
 * Prototype extended. (
 * 1. Function point to prototype via function.prototype
 * 2. And prototype point back to function via prototype.constructor
 * 3. prototype as it is object hence it also has __proto__
 * 4. property lookup goes next to __proto__ hirarachy  and continue until Object.prototype.
 * 5. Object.prototype.__proto__ = null to breack the hierarchi and make this top most object)
 * 
 */

 function Home(name,id) {
     this.name = name;
     this.id = id;
 }

 //storing and printing prototype oject
 var proto = Home.prototype;
 console.log(proto);

 //check what prototype.constructor field stores. 
 console.log(proto.constructor);

 //create object through long way after learning constructor field.
 console.log(new proto.constructor('kawatra',13137)); 

 console.logc

  