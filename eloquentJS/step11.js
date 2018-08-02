/**
 * Exection Context and this in javascript.
 */


 const fun = function() {
     console.log('fun method');
     console.log(this);
 }

 /**************************************************************************************************
  * value of this keyword will be global object - here
  **************************************************************************************************/
 fun(); //1
 
 
 /************************************************************************************
  * value of this keyword will be own oject.
  *************************************************************************************************/
  new fun(); //2

  /**--------------------------------------------------------------------------------------------------------- */
 const obj = {};
 obj.fun = function() {
     console.log('fun method inside object');
     console.log(this);
 }
 obj.fun(); //3
  /***************************************************************************************************
  * value of this here is object enclosing object. 
  **************************************************************************************************/
 

 

  function Bike(name, tirePressure) {
      this.name = name;
      this.tirePressure = tirePressure;
      this.inflateTyre = function() { // method
          this.tirePressure += 3; //context here wil be an object
      };
  }


  function Mechanic(name) {
    this.name =name;
}

  let classic = new Bike('classic',28);
  classic.inflateTyre();

  let thunderBird = new Bike('thunderBird', 30);
  thunderBird.inflateTyre();

  let gullu = new Mechanic('Gullu');
  gullu.inflateTyre = classic.inflateTyre;

// what if we want gulu/mechanic to inflate our tire pressure

/*************************************************************************************
 * Value of this can be changed by passing the context object via call()
 * note:  javaScript function - a type of object :) and call is property of it.
 ****************************************************************************************/
gullu.inflateTyre.call(thunderBird); // 4

console.log(classic);
console.log(thunderBird);

