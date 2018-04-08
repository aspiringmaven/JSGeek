/**
 * function
 */

 const greeting = function(name) {
    return "Hello " + name;
 }

 console.log(greeting("World !!!"));

 /******************************************************Recursive */
 const power = function(number, topower) {
    if(topower <= 0) return 1;
    return number * power(number, topower -1);
 }

 console.log(power(5,3));


 /*************************************Arrow Power ******************************** */

 const arrowPower = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };

const square1 = (number) => {return number * number;};
const square2 = (number) => number * number;

  console.log(arrowPower(12,3));
  console.log(square1(15));
  console.log(square2(15));

  /******************* */

  function optional(a,b) {
    console.log(a+b);
  }

  optional(1,2,3); // extra parameter will be ignored

/****************** */
  function defaultFun(a,b,c=12) {
      console.log(a+b+c);
  }


  defaultFun(10,8); // default paraneter will be picked.
