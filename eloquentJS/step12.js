/**
 * Prototype
 * 
 * every function has prototype proprty and
 * every object has __proto__
 *                          and both point to Prototype Object
 * 
 * 
 * HENCE
 * 
 * as we know Prototype is also an object so it also constains __proto__
 * 
 */
function Person(name) {
    this.name =name;
}

let obj = new Person("Sumit");

console.log(Person.prototype); // Person {}
console.log(obj.__proto__); // Person
console.log(Person.prototype === obj.__proto__); // true as Person.prototype == object.__proto__

/**
 * now i am adding a field in prototype object. and accessing throgh both prototype  and __proto__
 */
Person.prototype.test = "This is the Person protototype";

console.log(Person.prototype.test);
console.log(obj.__proto__.test);

// the field will be first find in object if not find then interpreter looks into prototype 
console.log(obj.test); 

/****************************************************************************************************
 * * This is the case two when i am creating object without new and prototype didn't work 
 *************************************************************************** */

const Company = function(name) {
    let company = {};
    company.name = name;
    return company;
}

let TCS = Company('TCS');
let HCL = new Company('HCL');

console.log(Company.prototype);

console.log(Company.prototype === TCS.__proto__);// flase as this is not created using new keyword
console.log(Company.prototype === HCL.__proto__);// flase as this is not created using new keyword

/**
 * I see the object created without new is prototype of Object itself. 
 */
console.log(Object.prototype === HCL.__proto__);
console.log(Object.prototype === TCS.__proto__);

console.log(TCS.__proto__);
console.log(HCL.__proto__)

